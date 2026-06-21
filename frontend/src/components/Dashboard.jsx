import React, { useState, useEffect } from "react";
import { 
  Sparkles, Terminal, BookOpen, Music, Image as ImageIcon, Video, 
  ChevronLeft, ChevronRight, Plus, Users, Calendar, Clock, AlertCircle, X
} from "lucide-react";

export default function Dashboard({ onOpenProject, token }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalSlides = 2; // Slide 1: Projects list, Slide 2: AI Usage & Stats

  // Project Creation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1); // Step 1: Select Type, Step 2: Configure Details
  
  // Project Form States
  const [projName, setProjName] = useState("");
  const [projDesc, setProjDesc] = useState("");
  const [projType, setProjType] = useState("Story Creation");
  
  // Story Creation Details
  const [storyTypes, setStoryTypes] = useState(["Action", "Adventure", "Fantasy"]);
  const [customStoryType, setCustomStoryType] = useState("");
  const [storyLanguage, setStoryLanguage] = useState("English");
  const [storyChapters, setStoryChapters] = useState(5);
  
  // Coding Details
  const [codingRootFolder, setCodingRootFolder] = useState("");

  const presetStoryTypes = [
    "Action", "Adventure", "Erotic", "Fantasy", "Thriller", 
    "Horror", "Romance", "Comedy", "Psychological Thriller"
  ];

  // Load Projects from API
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/projects", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      } else {
        const err = await res.json();
        setErrorMessage(err.detail || "Failed to load projects");
      }
    } catch (e) {
      setErrorMessage("Could not connect to the backend server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleAddStoryType = () => {
    if (customStoryType.trim() && !storyTypes.includes(customStoryType.trim())) {
      setStoryTypes([...storyTypes, customStoryType.trim()]);
      setCustomStoryType("");
    }
  };

  const handleToggleStoryType = (type) => {
    if (storyTypes.includes(type)) {
      setStoryTypes(storyTypes.filter(t => t !== type));
    } else {
      setStoryTypes([...storyTypes, type]);
    }
  };

  const handleCreateProjectSubmit = async (e) => {
    e.preventDefault();
    if (!projName.trim()) {
      alert("Project Name is required.");
      return;
    }

    const payload = {
      name: projName.trim(),
      type: projType,
      description: projDesc.trim(),
      settings: {
        default_openrouter_model: "google/gemini-2.5-flash",
        favorite_models: ["google/gemini-2.5-flash", "google/gemini-2.5-pro", "meta-llama/llama-3.3-70b-instruct"],
        reasoning_length: "Minimal",
        output_length: "Medium",
        story_type: projType === "Story Creation" ? storyTypes : [],
        language: projType === "Story Creation" ? storyLanguage : "",
        chapters: projType === "Story Creation" ? parseInt(storyChapters) : 1,
        root_folder: projType === "Coding" ? codingRootFolder.trim() : "",
      }
    };

    try {
      const res = await fetch("http://localhost:8000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setIsModalOpen(false);
        setModalStep(1);
        resetForm();
        fetchProjects();
      } else {
        const data = await res.json();
        alert(data.detail || "Failed to create project");
      }
    } catch (err) {
      alert("Failed to submit project.");
    }
  };

  const resetForm = () => {
    setProjName("");
    setProjDesc("");
    setProjType("Story Creation");
    setStoryTypes(["Action", "Adventure", "Fantasy"]);
    setStoryLanguage("English");
    setStoryChapters(5);
    setCodingRootFolder("");
  };

  const getProjectIcon = (type) => {
    switch (type) {
      case "Story Creation": return <BookOpen size={20} className="text-primary-hover" />;
      case "Coding": return <Terminal size={20} className="text-primary-hover" />;
      case "Audio Generation": return <Music size={20} className="text-primary-hover" />;
      case "Image Generation": return <ImageIcon size={20} className="text-primary-hover" />;
      case "Video Generation": return <Video size={20} className="text-primary-hover" />;
      default: return <Sparkles size={20} className="text-primary-hover" />;
    }
  };

  // Trim helpers
  const formatProjectName = (name) => {
    return name.length > 25 ? name.substring(0, 25) + "..." : name;
  };

  return (
    <div className="dashboard-container">
      {/* Left Column: Carousel style card */}
      <div className="dashboard-left">
        <h2 className="dashboard-section-title">
          <Sparkles size={20} className="text-primary" /> Projects Portal
        </h2>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={handlePrevSlide}>
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn next" onClick={handleNextSlide}>
            <ChevronRight size={20} />
          </button>

          <div className="carousel-viewport">
            <div 
              className="carousel-container"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {/* Slide 1: List of projects */}
              <div className="carousel-slide">
                <div className="project-list-header">
                  <h3 className="pane-title">Active Projects</h3>
                  <button 
                    className="btn btn-primary create-user-btn" 
                    onClick={() => { resetForm(); setIsModalOpen(true); }}
                  >
                    <Plus size={16} /> New Project
                  </button>
                </div>

                {isLoading ? (
                  <div className="dashboard-empty">
                    <p className="dashboard-empty-text">Loading projects...</p>
                  </div>
                ) : projects.length === 0 ? (
                  <div className="dashboard-empty">
                    <div className="dashboard-empty-icon">
                      <BookOpen size={30} />
                    </div>
                    <p className="dashboard-empty-text">No projects found. Create your first project to get started!</p>
                  </div>
                ) : (
                  <div className="project-cards-grid">
                    {projects.map((p) => (
                      <div 
                        key={p.id} 
                        className="project-item-card"
                        onClick={() => onOpenProject(p.id)}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div>
                            <span className="project-item-type">{p.type}</span>
                            <h4 className="project-item-title">{formatProjectName(p.name)}</h4>
                            <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", marginTop: "0.25rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                              {p.description || "No description provided."}
                            </p>
                          </div>
                          <div style={{ padding: "0.5rem", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.03)" }}>
                            {getProjectIcon(p.type)}
                          </div>
                        </div>

                        <div className="project-item-meta">
                          <div className="project-item-meta-left">
                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                              <Clock size={12} /> {p.created_at ? new Date(p.created_at).toLocaleDateString() : "Just Now"}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                              <Users size={12} /> {p.contributing_users ? p.contributing_users.length + 1 : 1}
                            </span>
                          </div>
                          <span style={{ fontSize: "0.75rem", fontStyle: "italic" }}>
                            by @{p.author}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Slide 2: AI Statistics / Analytics */}
              <div className="carousel-slide" style={{ justifyContent: "center" }}>
                <h3 className="pane-title" style={{ marginBottom: "1rem" }}>System Intelligence Stats</h3>
                <p className="pane-subtitle">Global OpenRouter analytics and invocation statistics across all active workspaces.</p>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                  <div className="dummy-card" style={{ padding: "1.25rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>OpenRouter Invocations</span>
                    <strong style={{ fontSize: "1.75rem", color: "var(--primary-hover)", marginTop: "0.25rem" }}>
                      {projects.length * 8 + 12}
                    </strong>
                  </div>
                  <div className="dummy-card" style={{ padding: "1.25rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Calculated Cost</span>
                    <strong style={{ fontSize: "1.75rem", color: "var(--accent)", marginTop: "0.25rem" }}>
                      ${(projects.length * 0.024 + 0.05).toFixed(4)}
                    </strong>
                  </div>
                  <div className="dummy-card" style={{ padding: "1.25rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Active Model context</span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                      gemini-2.5-flash
                    </strong>
                  </div>
                  <div className="dummy-card" style={{ padding: "1.25rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Avg Latency</span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                      1.84 seconds
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel dots indicators */}
          <div className="carousel-dots">
            {[...Array(totalSlides)].map((_, i) => (
              <button 
                key={i} 
                className={`carousel-dot ${i === carouselIndex ? "active" : ""}`}
                onClick={() => setCarouselIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Dummy widgets and quick details */}
      <div className="dashboard-right">
        <h2 className="dashboard-section-title">
          <Clock size={20} className="text-primary" /> Assistant Overview
        </h2>

        {/* Dummy Card 1 */}
        <div className="dummy-card">
          <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Sparkles size={16} className="text-primary-hover" /> AI Workspace Guide
          </h4>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            Manage and generate creative narratives or code workspaces. Make sure your OpenRouter API key is initialized in the **Settings** section of your profile to access fully automated drafting.
          </p>
        </div>

        {/* Dummy Card 2 */}
        <div className="dummy-card">
          <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <Users size={16} className="text-primary-hover" /> Contributor Rules
          </h4>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
            Project creators and administrators can manage user permissions inside the Project Settings. Contributors have full access to Kanban boards, play areas, and logging statistics.
          </p>
        </div>
      </div>

      {/* CREATE PROJECT MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-card" style={{ maxWidth: "560px" }}>
            <div className="modal-header">
              <div className="modal-header-title-area">
                <Plus size={20} className="modal-icon-alert" />
                <h3>Create New Project</h3>
              </div>
              <button className="modal-close-btn" onClick={() => { setIsModalOpen(false); setModalStep(1); }}>
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleCreateProjectSubmit} className="multi-step-form">
              <div className="modal-body" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                
                {modalStep === 1 ? (
                  <>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>Step 1: Select Project Type</h4>
                    <div className="select-type-grid">
                      <div 
                        className={`type-select-card ${projType === "Story Creation" ? "selected" : ""}`}
                        onClick={() => setProjType("Story Creation")}
                      >
                        <BookOpen size={24} style={{ color: "var(--primary)" }} />
                        <div className="type-select-title">Story Creation</div>
                      </div>
                      <div 
                        className={`type-select-card ${projType === "Coding" ? "selected" : ""}`}
                        onClick={() => setProjType("Coding")}
                      >
                        <Terminal size={24} style={{ color: "var(--primary)" }} />
                        <div className="type-select-title">Coding</div>
                      </div>
                    </div>
                    
                    <div className="select-type-grid" style={{ marginTop: "0.5rem" }}>
                      <div 
                        className={`type-select-card ${projType === "Audio Generation" ? "selected" : ""}`}
                        onClick={() => setProjType("Audio Generation")}
                      >
                        <Music size={24} style={{ color: "var(--primary)" }} />
                        <div className="type-select-title">Audio Gen</div>
                      </div>
                      <div 
                        className={`type-select-card ${projType === "Image Generation" ? "selected" : ""}`}
                        onClick={() => setProjType("Image Generation")}
                      >
                        <ImageIcon size={24} style={{ color: "var(--primary)" }} />
                        <div className="type-select-title">Image Gen</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                      Step 2: {projType} Configuration
                    </h4>
                    
                    <div className="form-group">
                      <label className="form-label">Project Name *</label>
                      <input 
                        type="text" 
                        required
                        className="form-input" 
                        style={{ paddingLeft: "1rem" }}
                        placeholder="e.g. The Odyssey Chronicles" 
                        value={projName}
                        onChange={(e) => setProjName(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Description</label>
                      <textarea 
                        className="form-input" 
                        rows="3"
                        style={{ paddingLeft: "1rem", height: "auto", resize: "none" }}
                        placeholder="Brief summary of your project..." 
                        value={projDesc}
                        onChange={(e) => setProjDesc(e.target.value)}
                      />
                    </div>

                    {/* Story Creation Custom Fields */}
                    {projType === "Story Creation" && (
                      <>
                        <div className="form-group">
                          <label className="form-label">Story Type (Multiselect)</label>
                          <div className="multiselect-container">
                            <div className="multiselect-selected-list" style={{ marginBottom: "0.5rem" }}>
                              {storyTypes.map(t => (
                                <span key={t} className="multiselect-badge">
                                  {t}
                                  <button type="button" className="multiselect-badge-remove" onClick={() => handleToggleStoryType(t)}>x</button>
                                </span>
                              ))}
                            </div>
                            
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                              <select 
                                className="form-input"
                                style={{ paddingLeft: "1rem", flex: 1 }}
                                onChange={(e) => {
                                  if (e.target.value) {
                                    handleToggleStoryType(e.target.value);
                                    e.target.value = "";
                                  }
                                }}
                              >
                                <option value="">Select standard types...</option>
                                {presetStoryTypes.map(pt => (
                                  <option key={pt} value={pt} disabled={storyTypes.includes(pt)}>
                                    {pt}
                                  </option>
                                ))}
                              </select>
                              
                              <input 
                                type="text"
                                className="form-input"
                                style={{ paddingLeft: "1rem", width: "140px" }}
                                placeholder="Custom type"
                                value={customStoryType}
                                onChange={(e) => setCustomStoryType(e.target.value)}
                              />
                              <button type="button" className="btn btn-secondary" style={{ width: "auto" }} onClick={handleAddStoryType}>
                                Add
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Language *</label>
                          <select 
                            className="form-input" 
                            style={{ paddingLeft: "1rem" }}
                            value={storyLanguage} 
                            onChange={(e) => setStoryLanguage(e.target.value)}
                          >
                            <option value="English">English</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Kannada">Kannada</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Number of Chapters</label>
                          <input 
                            type="number" 
                            min="1"
                            max="100"
                            className="form-input" 
                            style={{ paddingLeft: "1rem" }}
                            value={storyChapters}
                            onChange={(e) => setStoryChapters(e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {/* Coding Project Custom Fields */}
                    {projType === "Coding" && (
                      <div className="form-group">
                        <label className="form-label">Project Root Folder *</label>
                        <input 
                          type="text" 
                          required
                          className="form-input" 
                          style={{ paddingLeft: "1rem" }}
                          placeholder="e.g. C:/Projects/MyReactApp" 
                          value={codingRootFolder}
                          onChange={(e) => setCodingRootFolder(e.target.value)}
                        />
                      </div>
                    )}
                  </>
                )}

              </div>

              <div className="modal-footer">
                {modalStep === 2 && (
                  <button 
                    type="button" 
                    className="modal-btn-cancel" 
                    onClick={() => setModalStep(1)}
                  >
                    Back
                  </button>
                )}
                <button 
                  type="button" 
                  className="modal-btn-cancel" 
                  onClick={() => { setIsModalOpen(false); setModalStep(1); }}
                >
                  Cancel
                </button>
                {modalStep === 1 ? (
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{ width: "auto" }} 
                    onClick={() => setModalStep(2)}
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: "auto" }}
                  >
                    Create Project
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
