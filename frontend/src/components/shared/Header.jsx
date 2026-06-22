import React, { useState, useEffect, useRef } from "react";
import { Home, LogOut, User, ChevronDown, Terminal, Sun, Moon } from "lucide-react";

export default function Header({ user, currentScreen, navigateTo, onLogout, theme, setTheme, token }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeToggle = async () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    
    // Save to backend settings
    try {
      const resSettings = await fetch("http://localhost:8000/api/users/me/settings", {
        headers: { Authorization: `Bearer ${token}` }
      });
      let openrouter_key = "";
      let google_key = "";
      if (resSettings.ok) {
        const currentSettings = await resSettings.json();
        openrouter_key = currentSettings.openrouter_api_key || "";
        google_key = currentSettings.google_ai_key || "";
      }
      
      await fetch("http://localhost:8000/api/users/me/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          openrouter_api_key: openrouter_key,
          google_ai_key: google_key,
          theme: nextTheme
        })
      });
    } catch (e) {
      console.error("Failed to update theme in database", e);
    }
  };

  return (
    <header className="app-header">
      <div className="header-logo" onClick={() => navigateTo("dashboard")}>
        <div className="header-logo-icon">
          <Terminal size={18} />
        </div>
        <span className="header-logo-text">AI Assistant</span>
      </div>

      <div className="header-actions">
        <button
          className="back-home-btn"
          onClick={handleThemeToggle}
          title="Toggle Light/Dark Mode"
          style={{ padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {currentScreen !== "dashboard" && (
          <button 
            className="back-home-btn"
            onClick={() => navigateTo("dashboard")}
            title="Go back to Home Screen"
          >
            <Home size={16} />
            <span>Home</span>
          </button>
        )}

        <div className="avatar-dropdown" ref={dropdownRef}>
          <div 
            className="avatar-trigger" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            title={`Logged in as ${user?.username}`}
          >
            {user?.username ? user.username.substring(0, 2).toUpperCase() : "US"}
          </div>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <button 
                className="dropdown-item"
                onClick={() => {
                  setDropdownOpen(false);
                  navigateTo("profile");
                }}
              >
                <User size={16} />
                <span>My Profile</span>
              </button>
              <button 
                className="dropdown-item logout"
                onClick={() => {
                  setDropdownOpen(false);
                  onLogout();
                }}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
