import React, { useState } from "react";
import { User, Lock, AlertCircle, Loader2, Terminal } from "lucide-react";

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Client-side validations
    if (!username.trim()) {
      setError("Username is required.");
      return;
    }
    if (!password) {
      setError("Password is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed. Please verify credentials.");
      }

      // Successful authentication
      onLogin(data.access_token, { username: data.username, role: data.role });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card glass-card">
        <div className="login-icon">
          <Terminal size={24} />
        </div>
        
        <h1 className="login-title">Welcome back</h1>
        <p className="login-subtitle">Sign in to your AI Assistant space</p>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="error-message" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <div className="input-container">
              <User className="input-icon" />
              <input
                id="username"
                type="text"
                className="form-input"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Loader2 size={18} className="animate-spin" />
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
