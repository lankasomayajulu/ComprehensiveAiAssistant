import React, { useState } from "react";
import UserSettings from "./UserSettings";
import ChangePassword from "./ChangePassword";
import UserManagement from "./UserManagement";
import { Settings, Lock, Users } from "lucide-react";

export default function Profile({ user, token, theme, setTheme }) {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <div className="profile-layout">
      <aside className="profile-sidebar glass-card">
        <h3 className="profile-sidebar-title">My Profile</h3>
        <button
          className={`sidebar-tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings size={18} />
          <span>User Settings</span>
        </button>
        <button
          className={`sidebar-tab ${activeTab === "password" ? "active" : ""}`}
          onClick={() => setActiveTab("password")}
        >
          <Lock size={18} />
          <span>Change Password</span>
        </button>

        {user?.role === "administrator" && (
          <>
            <div className="form-divider" style={{ margin: "1rem 0" }} />
            <h3 className="profile-sidebar-title">Admin Controls</h3>
            <button
              className={`sidebar-tab ${activeTab === "management" ? "active" : ""}`}
              onClick={() => setActiveTab("management")}
            >
              <Users size={18} />
              <span>User Management</span>
            </button>
          </>
        )}
      </aside>

      <section className="profile-content-pane">
        {activeTab === "settings" && <UserSettings token={token} theme={theme} setTheme={setTheme} />}
        {activeTab === "password" && <ChangePassword token={token} />}
        {activeTab === "management" && user?.role === "administrator" && (
          <UserManagement token={token} />
        )}
      </section>
    </div>
  );
}
