import React, { useState, useEffect, useRef } from "react";
import { Home, LogOut, User, ChevronDown, Terminal } from "lucide-react";

export default function Header({ user, currentScreen, navigateTo, onLogout }) {
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

  return (
    <header className="app-header">
      <div className="header-logo" onClick={() => navigateTo("dashboard")}>
        <div className="header-logo-icon">
          <Terminal size={18} />
        </div>
        <span className="header-logo-text">AI Assistant</span>
      </div>

      <div className="header-actions">
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
