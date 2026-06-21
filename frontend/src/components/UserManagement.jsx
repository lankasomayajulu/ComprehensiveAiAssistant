import React, { useState, useEffect } from "react";
import { UserPlus, Search, Shield, Key, AlertCircle, CheckCircle, Loader2, X } from "lucide-react";

export default function UserManagement({ token }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  
  // Create Form State
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("normal_user");
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  // Change Password Form State
  const [targetUser, setTargetUser] = useState("");
  const [targetNewPassword, setTargetNewPassword] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:8000/api/users/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error("Failed to load user list.");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [token]);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setFormError("");
    
    if (!newUsername.trim()) {
      setFormError("Username is required.");
      return;
    }
    if (newUsername.length < 3) {
      setFormError("Username must be at least 3 characters.");
      return;
    }
    if (!newPassword || newPassword.length < 4) {
      setFormError("Password must be at least 4 characters.");
      return;
    }

    setFormLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          username: newUsername,
          password: newPassword,
          role: newRole
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to create user.");
      }

      setSuccess(`User '${newUsername}' created successfully.`);
      setCreateModalOpen(false);
      setNewUsername("");
      setNewPassword("");
      setNewRole("normal_user");
      fetchUsers();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!targetNewPassword || targetNewPassword.length < 4) {
      setFormError("Password must be at least 4 characters.");
      return;
    }

    setFormLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/users/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          username: targetUser,
          new_password: targetNewPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to update password.");
      }

      setSuccess(`Password for user '${targetUser}' updated successfully.`);
      setChangePasswordModalOpen(false);
      setTargetUser("");
      setTargetNewPassword("");
    } catch (err) {
      setFormError(err.message);
    } finally {
      setFormLoading(false);
    }
  };

  const filteredUsers = users.filter((u) =>
    u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="pane-title">User Management</h2>
      <p className="pane-subtitle">Manage user credentials and privilege levels in the system. (Admin only)</p>

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

      <div className="user-management-actions">
        <div className="search-input-wrapper">
          <Search className="input-icon" />
          <input
            type="text"
            className="form-input"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: "2.5rem" }}
          />
        </div>

        <button 
          className="btn create-user-btn" 
          onClick={() => {
            setFormError("");
            setCreateModalOpen(true);
          }}
        >
          <UserPlus size={16} />
          <span>Add User</span>
        </button>
      </div>

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
          <Loader2 className="animate-spin" size={24} style={{ color: "var(--primary)" }} />
          <span style={{ marginLeft: "0.5rem", color: "var(--text-secondary)" }}>Loading user list...</span>
        </div>
      ) : (
        <div className="user-table-card glass-card">
          <table className="user-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center", color: "var(--text-muted)", padding: "2rem" }}>
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.username}>
                    <td style={{ fontWeight: "500" }}>{u.username}</td>
                    <td>
                      <span className={`user-role-badge ${u.role}`}>
                        <Shield size={10} style={{ marginRight: "4px" }} />
                        {u.role === "administrator" ? "Admin" : "Normal User"}
                      </span>
                    </td>
                    <td>
                      <button
                        className="table-action-btn"
                        onClick={() => {
                          setFormError("");
                          setTargetUser(u.username);
                          setChangePasswordModalOpen(true);
                        }}
                        style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
                      >
                        <Key size={12} />
                        <span>Reset Password</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* CREATE USER MODAL */}
      {createModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <div className="modal-header">
              <h3 className="modal-title">Create New User</h3>
              <button className="modal-close-btn" onClick={() => setCreateModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateUser}>
              {formError && (
                <div className="error-message" style={{ marginBottom: "1.25rem" }}>
                  <AlertCircle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="modal-username">Username</label>
                <input
                  id="modal-username"
                  type="text"
                  className="form-input"
                  placeholder="Enter username"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ""))}
                  disabled={formLoading}
                  style={{ paddingLeft: "1rem" }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-password">Initial Password</label>
                <input
                  id="modal-password"
                  type="password"
                  className="form-input"
                  placeholder="Enter initial password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={formLoading}
                  style={{ paddingLeft: "1rem" }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="modal-role">Role</label>
                <select
                  id="modal-role"
                  className="form-input"
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                  disabled={formLoading}
                  style={{ paddingLeft: "1rem", backgroundColor: "var(--bg-primary)" }}
                >
                  <option value="normal_user">Normal User</option>
                  <option value="administrator">Administrator</option>
                </select>
              </div>

              <div className="modal-footer">
                <button type="button" className="modal-btn-cancel" onClick={() => setCreateModalOpen(false)} disabled={formLoading}>
                  Cancel
                </button>
                <button type="submit" className="btn modal-btn-submit" disabled={formLoading}>
                  {formLoading ? <Loader2 size={16} className="animate-spin" /> : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CHANGE PASSWORD OVERRIDE MODAL */}
      {changePasswordModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-card">
            <div className="modal-header">
              <h3 className="modal-title">Reset Password for '{targetUser}'</h3>
              <button className="modal-close-btn" onClick={() => setChangePasswordModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleChangePassword}>
              {formError && (
                <div className="error-message" style={{ marginBottom: "1.25rem" }}>
                  <AlertCircle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="target-password">New Password</label>
                <input
                  id="target-password"
                  type="password"
                  className="form-input"
                  placeholder="Enter new password for user"
                  value={targetNewPassword}
                  onChange={(e) => setTargetNewPassword(e.target.value)}
                  disabled={formLoading}
                  style={{ paddingLeft: "1rem" }}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="modal-btn-cancel" onClick={() => setChangePasswordModalOpen(false)} disabled={formLoading}>
                  Cancel
                </button>
                <button type="submit" className="btn modal-btn-submit" disabled={formLoading}>
                  {formLoading ? <Loader2 size={16} className="animate-spin" /> : "Save Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
