import React, { useState, useEffect, useRef } from "react";
import { Plus, MessageSquare, ArrowLeft, Send, Sparkles, Trash2, Calendar, User, Clock } from "lucide-react";

export default function KanbanBoard({ projectId, token, user, project }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDesc, setNewCardDesc] = useState("");
  const [newCardPhase, setNewCardPhase] = useState("Not Started");
  
  // Discussion thread states
  const [newComment, setNewComment] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const commentsEndRef = useRef(null);

  const phases = ["Not Started", "In Development", "Testing", "Review", "Completed"];

  useEffect(() => {
    fetchCards();
  }, [projectId]);

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

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/cards/${selectedCard.id}/ai-response`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        }
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

  // If a card is clicked, show Card Details view in Board Tab
  if (selectedCard) {
    return (
      <div className="card-details-container">
        {/* Left Side: Ticket details */}
        <div className="card-details-left">
          <div>
            <button className="back-home-btn" onClick={() => setSelectedCard(null)} style={{ marginBottom: "1rem" }}>
              <ArrowLeft size={14} /> Go Back to Board
            </button>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span className={`user-role-badge ${selectedCard.phase.toLowerCase().replace(" ", "_")}`} style={{ display: "inline-block", marginBottom: "0.5rem" }}>
                  {selectedCard.phase}
                </span>
                <h1 className="pane-title" style={{ fontSize: "1.75rem" }}>{selectedCard.title}</h1>
              </div>
              <button 
                className="back-home-btn" 
                style={{ color: "var(--error)", borderColor: "var(--error)" }}
                onClick={() => handleDeleteCard(selectedCard.id)}
              >
                <Trash2 size={14} /> Delete Ticket
              </button>
            </div>
            
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
              Created: {selectedCard.created_at ? new Date(selectedCard.created_at).toLocaleString() : "Recently"}
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.5rem", marginTop: "1rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: "600", marginBottom: "0.5rem" }}>Description</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
              {selectedCard.description || "No description provided."}
            </p>
          </div>
        </div>

        {/* Right Side: Conversation Thread */}
        <div className="card-details-right-thread">
          <div className="thread-header">
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MessageSquare size={16} /> Discussion Thread
            </span>
            <button 
              className="btn btn-secondary" 
              style={{ width: "auto", display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
              onClick={handleGenerateAiResponse}
              disabled={isAiLoading}
            >
              <Sparkles size={12} /> {isAiLoading ? "Thinking..." : "Generate AI Response"}
            </button>
          </div>

          <div className="thread-messages">
            {selectedCard.comments && selectedCard.comments.length === 0 ? (
              <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", margin: "auto" }}>
                No discussions yet. Post a comment or ask AI to write one!
              </p>
            ) : (
              selectedCard.comments.map(c => {
                const isSelf = c.author === user.username;
                const isAi = c.is_ai_response;
                let msgClass = "";
                if (isSelf) msgClass = "self";
                else if (isAi) msgClass = "ai";
                
                return (
                  <div key={c.comment_id} className={`thread-msg ${msgClass}`}>
                    <div className="thread-msg-meta">
                      <strong style={{ color: isAi ? "var(--accent)" : "var(--text-primary)" }}>
                        {isAi ? "AI Assistant" : `@${c.author}`}
                      </strong>
                      <span>{new Date(c.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="thread-msg-text">{c.text}</div>
                  </div>
                );
              })
            )}
            {isAiLoading && (
              <div className="thread-msg ai" style={{ opacity: 0.7 }}>
                <div className="thread-msg-meta">
                  <strong>AI Assistant</strong>
                  <span>Thinking...</span>
                </div>
                <div className="thread-msg-text">Generating OpenRouter response based on project files...</div>
              </div>
            )}
            <div ref={commentsEndRef} />
          </div>

          <form onSubmit={handleSendComment} className="thread-input-area">
            <div className="thread-input-row">
              <input 
                type="text" 
                className="thread-text-input" 
                placeholder="Reply to thread..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ width: "40px", padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
