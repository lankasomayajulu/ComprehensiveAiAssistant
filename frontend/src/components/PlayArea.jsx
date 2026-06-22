import React, { useState, useEffect, useRef } from "react";
import { 
  Folder, File, ChevronDown, ChevronRight, Settings, Sliders, 
  Play, FileText, CheckSquare, Plus, Save, Sparkles, X, Trash2, Edit
} from "lucide-react";
import ModalAlert from "./shared/ModalAlert";

export default function PlayArea({ projectId, token, project, onUpdateProject }) {
  // Tabs
  const [leftTab, setLeftTab] = useState("explorer"); // "explorer" | "settings"
  const [rightTab, setRightTab] = useState("edit"); // "edit" | "preview"

  // Files / Folders structure
  const [structure, setStructure] = useState({ folders: [], files: [] });
  const [collapsedFolders, setCollapsedFolders] = useState({});
  const [activeFile, setActiveFile] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [selectedFileIds, setSelectedFileIds] = useState([]);

  // OpenRouter Settings states
  const [favoriteModels, setFavoriteModels] = useState([]);
  const [defaultModel, setDefaultModel] = useState("");
  const [reasoningLength, setReasoningLength] = useState("Minimal");
  const [outputLength, setOutputLength] = useState("Medium");
  const [availableModels, setAvailableModels] = useState([]);
  const [isFavModelsDropdownOpen, setIsFavModelsDropdownOpen] = useState(false);

  // Prompts config (Story Creation settings prompts)
  const [continueSystemPrompt, setContinueSystemPrompt] = useState("");
  const [continuePrompt, setContinuePrompt] = useState("");
  const [reviseSystemPrompt, setReviseSystemPrompt] = useState("");
  const [revisePrompt, setRevisePrompt] = useState("");

  // New Folder / File States
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [isCreateFileOpen, setIsCreateFileOpen] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState("");

  // Modal Alert States
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  // Track active file ref to autosave when activeFileId changes
  const activeFileRef = useRef(null);
  const editorContentRef = useRef("");

  useEffect(() => {
    fetchStructure();
    fetchAvailableModels();
    loadProjectSettings();
  }, [projectId]);

  useEffect(() => {
    loadProjectSettings();
  }, [project]);

  // Keep ref synced
  useEffect(() => {
    editorContentRef.current = editorContent;
  }, [editorContent]);

  const loadProjectSettings = () => {
    if (!project) return;
    const s = project.settings || {};
    setFavoriteModels(s.favorite_models || []);
    setDefaultModel(s.default_openrouter_model || "");
    setReasoningLength(s.reasoning_length || "Minimal");
    setOutputLength(s.output_length || "Medium");
    
    if (s.default_openrouter_model) {
      localStorage.setItem(`project_model_${projectId}`, s.default_openrouter_model);
    }

    const prompts = s.prompts || {};
    setContinueSystemPrompt(prompts.continue_system_prompt || "");
    setContinuePrompt(prompts.continue_prompt || "");
    setReviseSystemPrompt(prompts.revise_system_prompt || "");
    setRevisePrompt(prompts.revise_prompt || "");
  };

  const fetchAvailableModels = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/projects/openrouter/models", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAvailableModels(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchStructure = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/folders`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        
        if (data.type === "Coding") {
          // Normalize coding files into folders
          setStructure({ type: "Coding", files: data.files || [] });
          // Set active file if none
          if (data.files && data.files.length > 0 && !activeFileRef.current) {
            const firstFile = data.files.find(f => !f.is_dir);
            if (firstFile) {
              handleSelectFile(firstFile.path, firstFile.name, true);
            }
          }
        } else {
          setStructure({ type: "Virtual", folders: data.folders || [], files: data.files || [] });
          // Set default active file (first file)
          if (data.files && data.files.length > 0 && !activeFileRef.current) {
            const firstFile = data.files[0];
            handleSelectFile(firstFile.id, firstFile.name, false);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveFileContent = async (fileId, content) => {
    if (!fileId) return;
    setIsSaving(true);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/files/${fileId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });
      if (res.ok) {
        if (fileId === "continue_system_prompt") setContinueSystemPrompt(content);
        else if (fileId === "continue_prompt") setContinuePrompt(content);
        else if (fileId === "revise_system_prompt") setReviseSystemPrompt(content);
        else if (fileId === "revise_prompt") setRevisePrompt(content);
      } else {
        console.error("Autosave failed");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSelectFile = async (fileId, fileName, isCoding = false) => {
    // 1. AUTOSAVE current file before moving to a new file
    if (activeFileRef.current && activeFileRef.current !== fileId) {
      await saveFileContent(activeFileRef.current, editorContentRef.current);
    }

    // 2. Load new file
    activeFileRef.current = fileId;
    setActiveFile({ id: fileId, name: fileName, isCoding });
    setEditorContent(""); // reset

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/files/${fileId}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setEditorContent(data.content || "");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleManualSave = async () => {
    if (!activeFile) return;
    await saveFileContent(activeFile.id, editorContent);
    alert("Saved successfully!");
  };

  const handleSettingsSave = async (e) => {
    e.preventDefault();
    const updatedSettings = {
      default_openrouter_model: defaultModel,
      favorite_models: favoriteModels,
      reasoning_length: reasoningLength,
      output_length: outputLength,
      story_type: project?.settings?.story_type || [],
      language: project?.settings?.language || "English",
      chapters: parseInt(project?.settings?.chapters || 1),
      root_folder: project?.settings?.root_folder || "",
      prompts: {
        continue_system_prompt: continueSystemPrompt,
        continue_prompt: continuePrompt,
        revise_system_prompt: reviseSystemPrompt,
        revise_prompt: revisePrompt
      }
    };

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/settings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ settings: updatedSettings })
      });
      if (res.ok) {
        const data = await res.json();
        alert("Project Settings saved to database!");
        if (onUpdateProject) {
          onUpdateProject(data);
        }
      } else {
        alert("Failed to save settings");
      }
    } catch (e) {
      alert("Error saving settings");
    }
  };

  // Creating Folder
  const handleCreateFolder = async (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/folders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ name: newFolderName.trim() })
      });
      if (res.ok) {
        setIsCreateFolderOpen(false);
        setNewFolderName("");
        fetchStructure();
      } else {
        const data = await res.json();
        alert(data.detail || "Error creating folder");
      }
    } catch (e) {
      alert("Error creating folder");
    }
  };

  // Creating File
  const handleCreateFile = async (e) => {
    e.preventDefault();
    if (!newFileName.trim() || !selectedFolderId) return;

    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/folders/${selectedFolderId}/files`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ name: newFileName.trim(), content: "" })
      });
      if (res.ok) {
        setIsCreateFileOpen(false);
        setNewFileName("");
        fetchStructure();
      } else {
        const data = await res.json();
        alert(data.detail || "Error creating file");
      }
    } catch (e) {
      alert("Error creating file");
    }
  };

  const handleDeleteFile = async (fileId) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/files/${fileId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        if (activeFile?.id === fileId) {
          setActiveFile(null);
          activeFileRef.current = null;
          setEditorContent("");
        }
        fetchStructure();
      }
    } catch (e) {
      alert("Delete failed");
    }
  };

  // Drag-and-drop file reordering between virtual folders
  const handleFileDragStart = (e, fileId) => {
    e.dataTransfer.setData("text/plain", fileId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFolderDrop = async (e, folderId) => {
    e.preventDefault();
    const fileId = e.dataTransfer.getData("text/plain");
    if (!fileId || folderId === "prompts_folder") return;

    // Call reorder endpoint
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/files/reorder`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify([{
          file_id: fileId,
          target_folder_id: folderId,
          order: 1
        }])
      });
      if (res.ok) {
        fetchStructure();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleFolder = (folderId) => {
    setCollapsedFolders(prev => ({ ...prev, [folderId]: !prev[folderId] }));
  };

  const handleToggleFileSelection = (e, fileId) => {
    e.stopPropagation();
    setSelectedFileIds(prev => 
      prev.includes(fileId) ? prev.filter(id => id !== fileId) : [...prev, fileId]
    );
  };

  const handlePlanPrompt = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/generate-prompt`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setEditorContent(data.prompt);
        await saveFileContent("continue_system_prompt", data.prompt);
        alert("System Prompt generated and updated!");
      } else {
        alert("Failed to generate prompt from AI.");
      }
    } catch (e) {
      alert("Error generating prompt.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleContinueStory = async () => {
    if (!activeFile) {
      alert("Please select an active file to continue story.");
      return;
    }
    setIsSaving(true);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/continue-story`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          active_file_id: activeFile.id,
          selected_file_ids: selectedFileIds
        })
      });
      if (res.ok) {
        const data = await res.json();
        setEditorContent(data.new_content);
        setSelectedFileIds([]);
        alert(`Continuation completed! Detected Chapter: ${data.detected_chapter}. Kanban card created.`);
      } else {
        const err = await res.json();
        alert(err.detail || "Story continuation failed");
      }
    } catch (e) {
      alert("Error continuing story.");
    } finally {
      setIsSaving(false);
    }
  };

  // Action Buttons handlers -> Show Custom Modal Alert
  const triggerActionModal = (actionName) => {
    setAlertTitle(`${actionName} Action Executed`);
    setAlertMessage(`The action "${actionName}" has been successfully completed for the active document "${activeFile ? activeFile.name : "None"}". We will integrate its corresponding OpenRouter backend flow in the next phase.`);
    setIsAlertOpen(true);
  };

  // Simple Markdown Parser for Preview Tab
  const renderMarkdown = (text) => {
    if (!text) return <p style={{ fontStyle: "italic", color: "var(--text-muted)" }}>Empty Document</p>;
    
    // Quick regex replacements for headers, bolding, and paragraphs
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("# ")) {
        return <h1 key={idx} style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", marginTop: "1rem" }}>{line.replace("# ", "")}</h1>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={idx} style={{ marginTop: "1rem" }}>{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={idx} style={{ marginTop: "1rem" }}>{line.replace("### ", "")}</h3>;
      }
      // Simple bullets
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return <li key={idx} style={{ marginLeft: "1.5rem", marginBottom: "0.25rem" }}>{line.substring(2)}</li>;
      }
      // Blank lines
      if (!line.trim()) return <br key={idx} />;

      // Normal text
      return <p key={idx} style={{ marginBottom: "0.75rem" }}>{line}</p>;
    });
  };

  const toggleFavoriteModel = (model) => {
    if (favoriteModels.includes(model)) {
      setFavoriteModels(favoriteModels.filter(m => m !== model));
    } else {
      setFavoriteModels([...favoriteModels, model]);
    }
  };

  return (
    <div className="play-area-container">
      {/* Left Panel */}
      <div className="play-area-left">
        <div className="play-left-tabs">
          <button 
            className={`play-left-tab ${leftTab === "explorer" ? "active" : ""}`}
            onClick={() => setLeftTab("explorer")}
          >
            Explorer
          </button>
          <button 
            className={`play-left-tab ${leftTab === "settings" ? "active" : ""}`}
            onClick={() => setLeftTab("settings")}
          >
            Settings
          </button>
        </div>

        <div className="play-left-content">
          {leftTab === "explorer" ? (
            <div className="explorer-tree">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)" }}>Files</span>
                {structure.type !== "Coding" && (
                  <div style={{ display: "flex", gap: "0.25rem" }}>
                    <button 
                      className="table-action-btn" 
                      style={{ padding: "0.2rem 0.4rem", fontSize: "0.7rem" }}
                      onClick={() => setIsCreateFolderOpen(true)}
                      title="New Folder"
                    >
                      + Folder
                    </button>
                  </div>
                )}
              </div>

              {structure.type === "Coding" ? (
                // Coding File System display
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {structure.files.map(f => (
                    <div 
                      key={f.path}
                      className={`explorer-file-item ${activeFile?.id === f.path ? "active" : ""}`}
                      onClick={() => !f.is_dir && handleSelectFile(f.path, f.name, true)}
                      style={{ paddingLeft: f.is_dir ? "0.5rem" : "1.5rem" }}
                    >
                      <div className="file-title-wrap">
                        {!f.is_dir && (
                          <input 
                            type="checkbox" 
                            className="file-checkbox" 
                            checked={selectedFileIds.includes(f.path)}
                            onChange={(e) => handleToggleFileSelection(e, f.path)}
                            onClick={(e) => e.stopPropagation()}
                            style={{ marginRight: "0.4rem", cursor: "pointer" }}
                          />
                        )}
                        {f.is_dir ? <Folder size={14} style={{ color: "var(--primary)" }} /> : <File size={14} />}
                        <span>{f.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Virtual File System with drag reorder
                structure.folders.map(folder => {
                  const folderFiles = structure.files.filter(f => f.folder_id === folder.id);
                  const isCollapsed = collapsedFolders[folder.id];

                  return (
                    <div 
                      key={folder.id} 
                      className="explorer-folder"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleFolderDrop(e, folder.id)}
                    >
                      <div className="explorer-folder-header" onClick={() => toggleFolder(folder.id)}>
                        <div className="folder-title-wrap">
                          {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                          <Folder size={14} style={{ color: "var(--primary)" }} />
                          <span>{folder.name}</span>
                        </div>
                        
                        {!folder.is_special && (
                          <button 
                            type="button"
                            className="multiselect-badge-remove"
                            style={{ padding: "0 0.25rem" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFolderId(folder.id);
                              setIsCreateFileOpen(true);
                            }}
                            title="Add File"
                          >
                            +
                          </button>
                        )}
                      </div>

                      {!isCollapsed && (
                        <div className="explorer-folder-children">
                          {folderFiles.length === 0 ? (
                            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", padding: "0.25rem" }}>Empty</span>
                          ) : (
                            folderFiles.map(file => (
                              <div 
                                key={file.id} 
                                className={`explorer-file-item ${activeFile?.id === file.id ? "active" : ""}`}
                                draggable={!file.is_special}
                                onDragStart={(e) => handleFileDragStart(e, file.id)}
                                onClick={() => handleSelectFile(file.id, file.name, false)}
                              >
                                <div className="file-title-wrap">
                                  <input 
                                    type="checkbox" 
                                    className="file-checkbox" 
                                    checked={selectedFileIds.includes(file.id)}
                                    onChange={(e) => handleToggleFileSelection(e, file.id)}
                                    onClick={(e) => e.stopPropagation()} 
                                    style={{ cursor: "pointer" }}
                                  />
                                  <File size={12} />
                                  <span>{file.name}</span>
                                </div>
                                
                                {!file.is_special && (
                                  <button 
                                    className="multiselect-badge-remove" 
                                    onClick={(e) => { e.stopPropagation(); handleDeleteFile(file.id); }}
                                  >
                                    x
                                  </button>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            // OpenRouter Settings Forms
            <form onSubmit={handleSettingsSave} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "0.5rem" }}>OpenRouter settings</h3>
              
              <div className="form-group" style={{ position: "relative" }}>
                <label className="form-label">Favorite Models</label>
                <button
                  type="button"
                  className="form-input"
                  style={{ 
                    paddingLeft: "1rem", 
                    textAlign: "left", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    background: "var(--bg-primary)",
                    cursor: "pointer"
                  }}
                  onClick={() => setIsFavModelsDropdownOpen(!isFavModelsDropdownOpen)}
                >
                  <span>
                    {favoriteModels.length === 0 
                      ? "Select Favorite Models..." 
                      : `${favoriteModels.length} models selected`}
                  </span>
                  <span>▼</span>
                </button>
                
                {isFavModelsDropdownOpen && (
                  <div 
                    style={{ 
                      position: "absolute", 
                      top: "100%", 
                      left: 0, 
                      right: 0, 
                      backgroundColor: "var(--bg-tertiary)", 
                      border: "1px solid var(--border-color)", 
                      borderRadius: "10px", 
                      maxHeight: "180px", 
                      overflowY: "auto", 
                      zIndex: 100, 
                      padding: "0.5rem",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                      marginTop: "4px"
                    }}
                  >
                    {availableModels.length === 0 ? (
                      <div style={{ padding: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        No models available
                      </div>
                    ) : (
                      availableModels.map(m => {
                        const isChecked = favoriteModels.includes(m);
                        return (
                          <label 
                            key={m} 
                            style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "0.5rem", 
                              padding: "0.35rem 0.5rem", 
                              cursor: "pointer", 
                              fontSize: "0.85rem",
                              borderRadius: "6px",
                              transition: "background 0.15s",
                              color: isChecked ? "white" : "var(--text-secondary)"
                            }}
                            className="checkbox-dropdown-item"
                          >
                            <input 
                              type="checkbox" 
                              checked={isChecked}
                              onChange={() => toggleFavoriteModel(m)}
                              style={{ cursor: "pointer" }}
                            />
                            <span>{m}</span>
                          </label>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Default Model</label>
                <select 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  value={defaultModel}
                  onChange={(e) => {
                    setDefaultModel(e.target.value);
                    localStorage.setItem(`project_model_${projectId}`, e.target.value);
                  }}
                >
                  <option value="">Select Default...</option>
                  {favoriteModels.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Reasoning Length</label>
                <select 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  value={reasoningLength}
                  onChange={(e) => setReasoningLength(e.target.value)}
                >
                  <option value="None">None</option>
                  <option value="Minimal">Minimal</option>
                  <option value="Medium">Medium</option>
                  <option value="Deep">Deep</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Output Length</label>
                <select 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  value={outputLength}
                  onChange={(e) => setOutputLength(e.target.value)}
                >
                  <option value="Very Short">Very Short (1024)</option>
                  <option value="Short">Short (2048)</option>
                  <option value="Medium">Medium (4096)</option>
                  <option value="Large">Large (8192)</option>
                  <option value="Extra Large">Extra Large (16384)</option>
                  <option value="Max">Max (32768)</option>
                  <option value="Super Max">Super Max (65536)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Save size={16} /> Save Settings
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="play-area-right">
        {/* Topbar Actions */}
        <div className="play-right-topbar">
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginRight: "1rem" }}>
            Active: <strong>{activeFile ? activeFile.name : "None selected"}</strong>
          </span>
          
          {project?.type === "Story Creation" ? (
            <button className="table-action-btn" onClick={handleContinueStory} disabled={isSaving}>Continue</button>
          ) : (
            <button className="table-action-btn" onClick={() => triggerActionModal("Continue")}>Continue</button>
          )}
          <button className="table-action-btn" onClick={() => triggerActionModal("Revise")}>Revise</button>
          <button className="table-action-btn" onClick={() => triggerActionModal("Plan Chapter")}>Plan Chapter</button>
          <button className="table-action-btn" onClick={() => triggerActionModal("Create Scene Beats")}>Create Scene Beats</button>
          <button className="table-action-btn" onClick={() => triggerActionModal("Expand Chapter")}>Expand Chapter</button>
          
          {activeFile?.id === "continue_system_prompt" && (
            <button 
              className="table-action-btn" 
              style={{ backgroundColor: "var(--accent)", color: "white" }} 
              onClick={handlePlanPrompt}
              disabled={isSaving}
            >
              Plan Prompt
            </button>
          )}

          {activeFile && (
            <button 
              className="btn btn-primary" 
              style={{ marginLeft: "auto", width: "auto", padding: "0.4rem 0.75rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }}
              onClick={handleManualSave}
              disabled={isSaving}
            >
              <Save size={12} /> {isSaving ? "Saving..." : "Save"}
            </button>
          )}
        </div>

        {/* Editor Body */}
        <div className="play-right-body">
          <div className="play-right-tabs">
            <button 
              className={`play-right-tab-btn ${rightTab === "edit" ? "active" : ""}`}
              onClick={() => setRightTab("edit")}
            >
              Plain Text
            </button>
            <button 
              className={`play-right-tab-btn ${rightTab === "preview" ? "active" : ""}`}
              onClick={() => setRightTab("preview")}
            >
              Preview
            </button>
          </div>

          {rightTab === "edit" ? (
            <textarea
              className="editor-textarea"
              placeholder="Select a file from the explorer to start writing..."
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
              disabled={!activeFile}
            />
          ) : (
            <div className="preview-container">
              {renderMarkdown(editorContent)}
            </div>
          )}
        </div>
      </div>

      {/* CREATE FOLDER MODAL */}
      {isCreateFolderOpen && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <div className="modal-header-title-area">
                <Plus size={20} className="modal-icon-alert" />
                <h3>Create Virtual Folder</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsCreateFolderOpen(false)}>
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleCreateFolder} className="multi-step-form" style={{ padding: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label">Folder Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  placeholder="e.g. Chapter 1 Folders"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                />
              </div>

              <div className="modal-footer" style={{ padding: "1rem 0 0" }}>
                <button type="button" className="modal-btn-cancel" onClick={() => setIsCreateFolderOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ width: "auto" }}>
                  Create Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE FILE MODAL */}
      {isCreateFileOpen && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-header">
              <div className="modal-header-title-area">
                <Plus size={20} className="modal-icon-alert" />
                <h3>Create Virtual File</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsCreateFileOpen(false)}>
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleCreateFile} className="multi-step-form" style={{ padding: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label">File Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  style={{ paddingLeft: "1rem" }}
                  placeholder="e.g. draft_v1.md"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                />
              </div>

              <div className="modal-footer" style={{ padding: "1rem 0 0" }}>
                <button type="button" className="modal-btn-cancel" onClick={() => setIsCreateFileOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ width: "auto" }}>
                  Create File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* REUSABLE CUSTOM DIALOG */}
      <ModalAlert 
        isOpen={isAlertOpen}
        title={alertTitle}
        message={alertMessage}
        onClose={() => setIsAlertOpen(false)}
      />
    </div>
  );
}
