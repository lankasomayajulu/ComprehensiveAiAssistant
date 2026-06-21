import React, { useState } from "react";
import { Lock, Save, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

export default function ChangePassword({ token }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword) {
      setError("Password cannot be empty.");
      return;
    }
    if (newPassword.length < 4) {
      setError("Password must be at least 4 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("http://localhost:8000/api/users/me/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ new_password: newPassword })
      });

      if (!response.ok) {
        throw new Error("Failed to change password.");
      }

      setSuccess("Password updated successfully.");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h2 className="pane-title">Change Password</h2>
      <p className="pane-subtitle">Update your personal account credentials.</p>

      <form onSubmit={handleSubmit} className="glass-card" style={{ padding: "2rem", maxWidth: "600px" }}>
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
          <label className="form-label" htmlFor="new-password">New Password</label>
          <div className="input-container">
            <Lock className="input-icon" />
            <input
              id="new-password"
              type="password"
              className="form-input"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={saving}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginBottom: "2rem" }}>
          <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
          <div className="input-container">
            <Lock className="input-icon" />
            <input
              id="confirm-password"
              type="password"
              className="form-input"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              <span>Update Password</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
