import React, { useState } from "react";
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
    >
      {currentScreen === "dashboard" && (
        <Dashboard onOpenProject={handleOpenProject} token={token} />
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
        <Profile user={user} token={token} />
      )}
    </Layout>
  );
}

