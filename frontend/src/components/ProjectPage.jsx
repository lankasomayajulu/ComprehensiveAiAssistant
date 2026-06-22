import React, { useState, useEffect } from "react";
import { ArrowLeft, Settings, Users, X, Plus, Trash2 } from "lucide-react";
import KanbanBoard from "./KanbanBoard";
import PlayArea from "./PlayArea";
import LogsView from "./LogsView";

export default function ProjectPage({ projectId, token, user, onGoBack }) {
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("board"); // "board" | "play" | "logs"
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  
  // Settings Modal State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [contributorUsername, setContributorUsername] = useState("");
  const [contributorList, setContributorList] = useState([]);
  
  useEffect(() => {
    fetchProjectDetails();
  }, [projectId]);

  const fetchProjectDetails = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setProject(data);
        setContributorList(data.contributing_users || []);
      } else {
        alert("Failed to load project details");
        onGoBack();
      }
    } catch (e) {
      alert("Error fetching project data");
      onGoBack();
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddContributor = async () => {
    const username = contributorUsername.trim();
    if (!username) return;
    if (username === project.author) {
      alert("Author is already contributing.");
      return;
    }
    if (contributorList.includes(username)) {
      alert("User already added.");
      return;
    }

    const newList = [...contributorList, username];
    
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/contributors`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ contributing_users: newList })
      });
      if (res.ok) {
        setContributorList(newList);
        setContributorUsername("");
        // Reload details
        setProject({ ...project, contributing_users: newList });
      } else {
        const err = await res.json();
        alert(err.detail || "Failed to add contributor. Ensure user exists.");
      }
    } catch (err) {
      alert("Request failed.");
    }
  };

  const handleRemoveContributor = async (username) => {
    const newList = contributorList.filter(u => u !== username);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/contributors`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ contributing_users: newList })
      });
      if (res.ok) {
        setContributorList(newList);
        setProject({ ...project, contributing_users: newList });
      } else {
        const err = await res.json();
        alert(err.detail || "Failed to remove contributor.");
      }
    } catch (err) {
      alert("Request failed.");
    }
  };

  if (isLoading) {
    return (
      <div className="dashboard-empty">
        <p className="dashboard-empty-text">Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="dashboard-empty">
        <p className="dashboard-empty-text">Project not found or deleted.</p>
        <button className="back-home-btn" onClick={onGoBack} style={{ marginTop: "1rem" }}>
          Go Back
        </button>
      </div>
    );
  }

  const isAuthorOrAdmin = user.role === "administrator" || project.author === user.username;

  const handleBack = () => {
    if (activeTab === "board" && selectedCard) {
      setSelectedCard(null);
    } else {
      onGoBack();
    }
  };

  return (
    <div className="project-container">
      {/* Sub Header */}
      <div className="project-navbar">
        <div className="project-info">
          <button className="back-home-btn" onClick={handleBack} style={{ padding: "0.4rem 0.75rem" }}>
            <ArrowLeft size={16} /> Back
          </button>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="project-type-badge">{project.type}</span>
              <h2 className="project-title">{project.name}</h2>
            </div>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
              Created by @{project.author} • Contributors: {contributorList.length}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div className="project-tabs">
            <button 
              className={`project-tab-btn ${activeTab === "board" ? "active" : ""}`}
              onClick={() => setActiveTab("board")}
            >
              Kanban Board
            </button>
            <button 
              className={`project-tab-btn ${activeTab === "play" ? "active" : ""}`}
              onClick={() => setActiveTab("play")}
            >
              Play Area
            </button>
            <button 
              className={`project-tab-btn ${activeTab === "logs" ? "active" : ""}`}
              onClick={() => setActiveTab("logs")}
            >
              AI Logs
            </button>
          </div>

          <button 
            className="back-home-btn" 
            onClick={() => setIsSettingsOpen(true)}
            style={{ padding: "0.5rem" }}
            title="Settings & Contributors"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Body Tab mount point */}
      <div className="project-body">
        {activeTab === "board" && (
          <KanbanBoard 
            projectId={projectId} 
            token={token} 
            user={user} 
            project={project} 
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        
        {activeTab === "play" && (
          <PlayArea 
            projectId={projectId} 
            token={token} 
            project={project} 
            onUpdateProject={(updatedProj) => setProject(updatedProj)}
          />
        )}
        
        {activeTab === "logs" && (
          <LogsView projectId={projectId} token={token} />
        )}
      </div>

      {/* CONTRIBUTORS & SETTINGS MODAL */}
      {isSettingsOpen && (
        <div className="modal-backdrop">
          <div className="modal-card" style={{ maxWidth: "480px" }}>
            <div className="modal-header">
              <div className="modal-header-title-area">
                <Users size={18} className="modal-icon-alert" />
                <h3>Project Settings</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsSettingsOpen(false)}>
                <X size={18} />
              </button>
            </div>
            
            <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Description
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {project.description || "No description provided."}
                </p>
              </div>
              
              <div className="form-divider" style={{ margin: "0.5rem 0" }} />

              <div>
                <h4 style={{ fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Contributing Users
                </h4>
                
                {isAuthorOrAdmin ? (
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                    <input 
                      type="text" 
                      className="form-input" 
                      style={{ paddingLeft: "1rem" }}
                      placeholder="Username to add..." 
                      value={contributorUsername}
                      onChange={(e) => setContributorUsername(e.target.value)}
                    />
                    <button className="btn btn-primary" style={{ width: "auto" }} onClick={handleAddContributor}>
                      Add
                    </button>
                  </div>
                ) : (
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                    Only project author or admin can modify contributors list.
                  </p>
                )}

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxHeight: "150px", overflowY: "auto" }}>
                  {contributorList.length === 0 ? (
                    <span style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>No contributors added yet.</span>
                  ) : (
                    contributorList.map(u => (
                      <div 
                        key={u} 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          padding: "0.5rem 0.75rem",
                          backgroundColor: "rgba(255,255,255,0.02)",
                          border: "1px solid var(--border-color)",
                          borderRadius: "6px"
                        }}
                      >
                        <span style={{ fontSize: "0.875rem" }}>@{u}</span>
                        {isAuthorOrAdmin && (
                          <button 
                            type="button" 
                            style={{ background: "none", border: "none", color: "var(--error)", cursor: "pointer" }}
                            onClick={() => handleRemoveContributor(u)}
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary" style={{ width: "auto" }} onClick={() => setIsSettingsOpen(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
