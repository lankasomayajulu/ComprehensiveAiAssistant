import React, { useState, useEffect } from "react";
import Layout from "./components/shared/Layout";
import LoginScreen from "./components/LoginScreen";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import ProjectPage from "./components/ProjectPage";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [currentScreen, setCurrentScreen] = useState(
    localStorage.getItem("token") ? "dashboard" : "login"
  );
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:8000/api/users/me/settings", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then(data => {
        if (data.theme) {
          setTheme(data.theme);
        }
      })
      .catch(() => {});
    }
  }, [token]);

  const handleLogin = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
    setCurrentScreen("dashboard");
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentScreen("login");
  };

  const navigateTo = (screen) => {
    if (!token) {
      setCurrentScreen("login");
    } else {
      setCurrentScreen(screen);
    }
  };

  const handleOpenProject = (id) => {
    setActiveProjectId(id);
    setCurrentScreen("project");
  };

  if (currentScreen === "login" || !token) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Layout
      user={user}
      currentScreen={currentScreen}
      navigateTo={navigateTo}
      onLogout={handleLogout}
      theme={theme}
      setTheme={setTheme}
      token={token}
    >
      {currentScreen === "dashboard" && (
        <Dashboard onOpenProject={handleOpenProject} token={token} user={user} />
      )}
      {currentScreen === "project" && (
        <ProjectPage
          projectId={activeProjectId}
          token={token}
          user={user}
          onGoBack={() => navigateTo("dashboard")}
        />
      )}
      {currentScreen === "profile" && (
        <Profile user={user} token={token} theme={theme} setTheme={setTheme} />
      )}
    </Layout>
  );
}

