import React, { useState, useEffect } from "react";
import { Key, Save, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export default function UserSettings({ token }) {
  const [openrouterKey, setOpenrouterKey] = useState("");
  const [googleKey, setGoogleKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("http://localhost:8000/api/users/me/settings", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (!response.ok) {
          throw new Error("Failed to load user settings.");
        }
        
        const data = await response.json();
        setOpenrouterKey(data.openrouter_api_key || "");
        setGoogleKey(data.google_ai_key || "");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [token]);

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const response = await fetch("http://localhost:8000/api/users/me/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          openrouter_api_key: openrouterKey,
          google_ai_key: googleKey
        })
      });

      if (!response.ok) {
        throw new Error("Failed to save settings.");
      }

      setSuccess("API keys saved successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <Loader2 className="animate-spin" size={24} style={{ color: "var(--primary)" }} />
        <span style={{ marginLeft: "0.5rem", color: "var(--text-secondary)" }}>Loading settings...</span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="pane-title">User Settings</h2>
      <p className="pane-subtitle">Manage external AI provider API credentials. These keys are used for code generation and creative assistant operations.</p>
      
      <form onSubmit={handleSave} className="glass-card" style={{ padding: "2rem", maxWidth: "600px" }}>
        {error && (
          <div className="error-message" style={{ marginBottom: "1.5rem" }}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="success-message" style={{ marginBottom: "1.5rem" }}>
            <CheckCircle size={16} />
            <span>{success}</span>
          </div>
        )}

        <div className="form-group">
          <label className="form-label" htmlFor="openrouter-key">OpenRouter API Key</label>
          <div className="input-container">
            <Key className="input-icon" />
            <input
              id="openrouter-key"
              type="password"
              className="form-input"
              placeholder="sk-or-..."
              value={openrouterKey}
              onChange={(e) => setOpenrouterKey(e.target.value)}
              disabled={saving}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: "2rem" }}>
          <label className="form-label" htmlFor="google-key">Google AI API Key</label>
          <div className="input-container">
            <Key className="input-icon" />
            <input
              id="google-key"
              type="password"
              className="form-input"
              placeholder="AIzaSy..."
              value={googleKey}
              onChange={(e) => setGoogleKey(e.target.value)}
              disabled={saving}
            />
          </div>
        </div>

        <button type="submit" className="btn" style={{ width: "auto", display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 2rem" }} disabled={saving}>
          {saving ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Save size={16} />
              <span>Save Keys</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
