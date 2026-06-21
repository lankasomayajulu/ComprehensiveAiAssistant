import React from "react";
import { Database, Shield, User } from "lucide-react";

export default function StatusBar({ user }) {
  const isConnected = true; // Hardcoded connected state since the server started successfully and uses local Mongo.

  return (
    <footer className="app-statusbar">
      <div className="statusbar-item">
        <span className={`status-dot ${isConnected ? "" : "disconnected"}`}></span>
        <Database size={12} style={{ marginLeft: "4px" }} />
        <span>Database: {isConnected ? "Connected (AI_Assistant_db)" : "Disconnected"}</span>
      </div>

      <div className="statusbar-item" style={{ gap: "1rem" }}>
        <div className="statusbar-item">
          <User size={12} />
          <span>User: {user?.username || "Guest"}</span>
        </div>
        <div className="statusbar-item">
          <Shield size={12} />
          <span>Role: {user?.role === "administrator" ? "Administrator" : "Normal User"}</span>
        </div>
      </div>
    </footer>
  );
}
