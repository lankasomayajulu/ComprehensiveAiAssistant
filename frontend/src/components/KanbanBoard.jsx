import React, { useState, useEffect, useRef } from "react";
import { Plus, MessageSquare, ArrowLeft, Send, Sparkles, Trash2, Calendar, User, Clock } from "lucide-react";

export default function KanbanBoard({ projectId, token, user, project, selectedCard, setSelectedCard }) {
  const [cards, setCards] = useState([]);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDesc, setNewCardDesc] = useState("");
  const [newCardPhase, setNewCardPhase] = useState("Not Started");
  
  // Discussion thread states
  const [newComment, setNewComment] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  // Inline edit states
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editPhase, setEditPhase] = useState("Not Started");
  
  const commentsEndRef = useRef(null);

  const phases = ["Not Started", "In Development", "Testing", "Review", "Completed"];

  useEffect(() => {
    fetchCards();
  }, [projectId]);

  // Sync edit states when a card is selected
  useEffect(() => {
    if (selectedCard) {
      setEditTitle(selectedCard.title || "");
      setEditDesc(selectedCard.description || "");
      setEditPhase(selectedCard.phase || "Not Started");
      setIsEditing(false);
    }
  }, [selectedCard?.id]);

  // Scroll to bottom of comments thread
  useEffect(() => {
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCard?.comments, isAiLoading]);

  const fetchCards = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setCards(data);
        
        // Update selected card if currently viewed
        if (selectedCard) {
          const updated = data.find(c => c.id === selectedCard.id);
          if (updated) {
            setSelectedCard(updated);
          }
        }
      }
    } catch (e) {
      console.error("Failed to load cards", e);
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("text/plain", cardId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = async (e, targetPhase) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text/plain");
    if (!cardId) return;

    // Optimistic Update
    const updatedCards = cards.map(c => {
      if (c.id === cardId) {
        return { ...c, phase: targetPhase };
      }
      return c;
    });
    setCards(updatedCards);

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ phase: targetPhase })
      });
      if (!res.ok) {
        fetchCards(); // Rollback if error
      }
    } catch (e) {
      fetchCards();
    }
  };

  const handleCreateCard = async (e) => {
    e.preventDefault();
    if (!newCardTitle.trim()) return;

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newCardTitle.trim(),
          description: newCardDesc.trim(),
          phase: newCardPhase
        })
      });

      if (res.ok) {
        setIsNewCardModalOpen(false);
        setNewCardTitle("");
        setNewCardDesc("");
        fetchCards();
      }
    } catch (err) {
      alert("Failed to create card");
    }
  };

  const handleDeleteCard = async (cardId) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${cardId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        setSelectedCard(null);
        fetchCards();
      }
    } catch (e) {
      alert("Delete failed");
    }
  };

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) return;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${selectedCard.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          title: editTitle.trim(),
          description: editDesc.trim(),
          phase: editPhase
        })
      });
      if (res.ok) {
        setIsEditing(false);
        fetchCards();
      } else {
        alert("Failed to update ticket details");
      }
    } catch (err) {
      alert("Save failed");
    }
  };

  const handleSendComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedCard) return;

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${selectedCard.id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ text: newComment.trim() })
      });

      if (res.ok) {
        setNewComment("");
        fetchCards();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerateAiResponse = async () => {
    if (!selectedCard) return;
    setIsAiLoading(true);

    const localModel = localStorage.getItem(`project_model_${projectId}`);

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${selectedCard.id}/ai-response`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ current_model: localModel || "" })
      });

      if (res.ok) {
        fetchCards();
      } else {
        const err = await res.json();
        alert(err.detail || "OpenRouter AI request failed.");
      }
    } catch (e) {
      alert("Error contacting openrouter.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const getPhaseClass = (phase) => {
    switch (phase) {
      case "Not Started": return "not-started";
      case "In Development": return "in-development";
      case "Testing": return "testing";
      case "Review": return "review";
      case "Completed": return "completed";
      default: return "";
    }
  };

  // If a card is clicked, show Card Details view in a Single-Column Forum Thread Layout
  if (selectedCard) {
    const creationComment = selectedCard.comments && selectedCard.comments[0];
    const authorName = creationComment ? creationComment.author : project.author;

    return (
      <div className="forum-thread-container">
        {/* Sub-Header Back trigger */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
          <button className="back-home-btn" onClick={() => setSelectedCard(null)}>
            <ArrowLeft size={14} /> Back to Board View
          </button>
        </div>

        {/* PM style Ticket top bar card */}
        <div className="glass-card ticket-header-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              {isEditing ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <input
                    type="text"
                    className="form-input"
                    style={{ paddingLeft: "1rem", fontSize: "1.25rem", fontWeight: "600" }}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <select
                    className="form-input"
                    style={{ paddingLeft: "1rem", width: "auto" }}
                    value={editPhase}
                    onChange={(e) => setEditPhase(e.target.value)}
                  >
                    {phases.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                    <span className={`user-role-badge ${selectedCard.phase.toLowerCase().replace(" ", "_")}`}>
                      {selectedCard.phase}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "500" }}>
                      TICKET-#{selectedCard.id.substring(18).toUpperCase()}
                    </span>
                  </div>
                  <h1 className="pane-title" style={{ fontSize: "1.75rem", marginBottom: 0 }}>{selectedCard.title}</h1>
                </>
              )}
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {isEditing ? (
                <>
                  <button className="btn btn-primary" style={{ width: "auto", padding: "0.5rem 1rem" }} onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className="modal-btn-cancel" style={{ padding: "0.5rem 1rem" }} onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="back-home-btn" onClick={() => setIsEditing(true)}>
                  Edit Ticket
                </button>
              )}
            </div>
          </div>

          {/* Ticket Metadata Row */}
          <div className="ticket-meta-row">
            <div className="ticket-meta-item">
              <User size={14} />
              <span>Created by <strong>@{authorName}</strong></span>
            </div>
            <div className="ticket-meta-item">
              <Calendar size={14} />
              <span>Created <strong>{selectedCard.created_at ? new Date(selectedCard.created_at).toLocaleString() : "Recently"}</strong></span>
            </div>
            <div className="ticket-meta-item">
              <Clock size={14} />
              <span>Updated <strong>{selectedCard.updated_at ? new Date(selectedCard.updated_at).toLocaleDateString() : "Recently"}</strong></span>
            </div>
          </div>

          {/* Original Post (Description) */}
          <div style={{ marginTop: "0.5rem" }}>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Description</h4>
            {isEditing ? (
              <textarea
                className="form-input"
                rows={5}
                style={{ paddingLeft: "1rem", height: "auto", resize: "vertical", fontFamily: "inherit" }}
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
            ) : (
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
                {selectedCard.description || "No description provided."}
              </p>
            )}
          </div>
        </div>

        {/* Sequential Replies Section (Forum Thread Style) */}
        <div className="forum-replies-section">
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--text-primary)" }}>
            Replies ({selectedCard.comments ? selectedCard.comments.length : 0})
          </h3>

          {selectedCard.comments && selectedCard.comments.length === 0 ? (
            <div className="forum-reply-card" style={{ textAlign: "center", color: "var(--text-muted)" }}>
              No discussions yet. Post a comment or generate an AI response below.
            </div>
          ) : (
            selectedCard.comments.map(c => {
              const isAi = c.is_ai_response;
              return (
                <div key={c.comment_id} className={`forum-reply-card ${isAi ? "ai-reply" : ""}`}>
                  <div className="forum-reply-header">
                    <strong style={{ color: isAi ? "var(--accent)" : "var(--text-primary)" }}>
                      {isAi ? "AI Assistant" : `@${c.author}`}
                    </strong>
                    <span>{new Date(c.timestamp).toLocaleString()}</span>
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
                    {c.text}
                  </div>
                </div>
              );
            })
          )}

          {isAiLoading && (
            <div className="forum-reply-card ai-reply" style={{ opacity: 0.7 }}>
              <div className="forum-reply-header">
                <strong>AI Assistant</strong>
                <span>Thinking...</span>
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                Generating response based on input files, description guidelines, and model defaults...
              </div>
            </div>
          )}
          <div ref={commentsEndRef} />
        </div>

        {/* Forum Bottom Thread Controls */}
        <div className="forum-bottom-controls">
          <div className="forum-options-row">
            <button 
              className="btn btn-secondary" 
              style={{ width: "auto", display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", padding: "0.5rem 1rem" }}
              onClick={handleGenerateAiResponse}
              disabled={isAiLoading}
            >
              <Sparkles size={14} /> {isAiLoading ? "Thinking..." : "Generate AI Response"}
            </button>
            <button 
              className="back-home-btn" 
              style={{ color: "var(--error)", borderColor: "var(--error)", background: "none" }}
              onClick={() => handleDeleteCard(selectedCard.id)}
            >
              <Trash2 size={14} style={{ display: "inline", marginRight: "0.25rem" }} /> Delete Ticket
            </button>
          </div>

          <form onSubmit={handleSendComment} className="thread-input-area" style={{ borderRadius: "12px", border: "1px solid var(--border-color)" }}>
            <div className="thread-input-row">
              <input 
                type="text" 
                className="thread-text-input" 
                placeholder="Post a reply in this thread..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ width: "48px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Column view
  return (
    <div className="kanban-board-container">
      {phases.map(p => {
        const columnCards = cards.filter(c => c.phase === p);
        
        return (
          <div 
            key={p} 
            className={`kanban-column column-${p.toLowerCase().replace(" ", "-")}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, p)}
          >
            <div className="kanban-column-header">
              <span className="kanban-column-title">
                {p}
              </span>
              <span className="kanban-column-count">{columnCards.length}</span>
            </div>

            <div className="kanban-column-cards">
              {columnCards.length === 0 ? (
                <div style={{ margin: "auto", fontSize: "0.8rem", color: "var(--text-muted)", padding: "1rem" }}>
                  Drop tickets here
                </div>
              ) : (
                columnCards.map(c => (
                  <div 
                    key={c.id} 
                    className={`kanban-card card-border-${p.toLowerCase().replace(" ", "-")}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, c.id)}
                    onClick={() => setSelectedCard(c)}
                  >
                    <h5 className="kanban-card-title">{c.title}</h5>
                    <p className="kanban-card-desc">{c.description}</p>
                    <div className="kanban-card-footer">
                      <span className="kanban-card-comments">
                        <MessageSquare size={12} /> {c.comments ? c.comments.length : 0}
                      </span>
                      <span>@{c.assigned_to && c.assigned_to[0] ? c.assigned_to[0] : "unassigned"}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Quick add card trigger */}
            <button 
              className="sidebar-tab" 
              style={{ margin: "0.5rem", width: "calc(100% - 1rem)", textAlign: "center", fontSize: "0.8rem", padding: "0.5rem", border: "1px dashed var(--border-color)", background: "none" }}
              onClick={() => { setNewCardPhase(p); setIsNewCardModalOpen(true); }}
            >
              <Plus size={12} style={{ display: "inline", marginRight: "0.25rem" }} /> Add Ticket
            </button>
          </div>
        );
      })}

      {/* CREATE CARD MODAL */}
      {isNewCardModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <div className="modal-header-title-area">
                <Plus size={20} className="modal-icon-alert" />
                <h3>Create Kanban Card ({newCardPhase})</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsNewCardModalOpen(false)}>
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleCreateCard} className="multi-step-form" style={{ padding: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label">Card Title *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  placeholder="e.g. Write Chapter 1 drafts"
                  value={newCardTitle}
                  onChange={(e) => setNewCardTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea 
                  className="form-input" 
                  rows="4" 
                  style={{ paddingLeft: "1rem", height: "auto", resize: "none" }}
                  placeholder="Ticket context or task breakdown..."
                  value={newCardDesc}
                  onChange={(e) => setNewCardDesc(e.target.value)}
                />
              </div>

              <div className="modal-footer" style={{ padding: "1rem 0 0" }}>
                <button type="button" className="modal-btn-cancel" onClick={() => setIsNewCardModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ width: "auto" }}>
                  Add Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline modal X representation
function X({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
