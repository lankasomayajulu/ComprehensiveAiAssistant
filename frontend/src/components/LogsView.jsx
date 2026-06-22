import React, { useState, useEffect } from "react";
import { 
  BarChart2, RefreshCw, ChevronDown, ChevronRight, 
  Folder, FolderOpen, FileText, Trash2, Calendar, User, Clock, ShieldAlert
} from "lucide-react";

export default function LogsView({ projectId, token }) {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLog, setSelectedLog] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState({});

  useEffect(() => {
    fetchLogs();
  }, [projectId]);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/logs`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
        // Retain selection if exists in new logs list
        if (selectedLog) {
          const updated = data.find(l => l.id === selectedLog.id);
          if (updated) setSelectedLog(updated);
        }
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const handleDeleteLog = async (e, logId) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to permanently delete this AI transaction log?")) return;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/logs/${logId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        if (selectedLog?.id === logId) {
          setSelectedLog(null);
        }
        fetchLogs();
      } else {
        alert("Failed to delete log");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteMonthLogs = async (e, year, monthName) => {
    e.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete ALL logs in ${monthName} ${year}?`)) return;
    
    // Resolve month index (1-12)
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth() + 1;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/logs/by-month/${year}/${monthIndex}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        // Clear selection if it matches year and month
        if (selectedLog) {
          const logDate = new Date(selectedLog.timestamp);
          const logYear = logDate.getFullYear();
          const logMonth = logDate.toLocaleString('default', { month: 'long' });
          if (logYear === year && logMonth === monthName) {
            setSelectedLog(null);
          }
        }
        fetchLogs();
      } else {
        alert("Failed to delete monthly logs");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteYearLogs = async (e, year) => {
    e.stopPropagation();
    if (!window.confirm(`Are you sure you want to delete ALL logs in year ${year}?`)) return;
    try {
      const res = await fetch(`http://localhost:8000/api/projects/${projectId}/logs/by-year/${year}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        if (selectedLog) {
          const logDate = new Date(selectedLog.timestamp);
          if (logDate.getFullYear() === year) {
            setSelectedLog(null);
          }
        }
        fetchLogs();
      } else {
        alert("Failed to delete yearly logs");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const formatCost = (cost) => {
    if (cost === undefined || cost === null) return "$0.000000";
    return `$${parseFloat(cost).toFixed(6)}`;
  };

  const formatDate = (isoStr) => {
    if (!isoStr) return "N/A";
    const d = new Date(isoStr);
    return d.toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Group logs helper
  const groupLogs = () => {
    const groups = {};
    logs.forEach(log => {
      if (!log.timestamp) return;
      const date = new Date(log.timestamp);
      const year = date.getFullYear();
      const monthName = date.toLocaleString('default', { month: 'long' });
      
      if (!groups[year]) {
        groups[year] = {};
      }
      if (!groups[year][monthName]) {
        groups[year][monthName] = [];
      }
      groups[year][monthName].push(log);
    });
    return groups;
  };

  const grouped = groupLogs();

  if (isLoading && logs.length === 0) {
    return (
      <div className="dashboard-empty">
        <p className="dashboard-empty-text">Loading intelligence ledger...</p>
      </div>
    );
  }

  return (
    <div className="logs-table-wrapper" style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Header bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 className="pane-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: 0 }}>
            <BarChart2 size={20} className="text-primary" /> AI Usage Ledger
          </h3>
          <p className="pane-subtitle" style={{ margin: 0, marginTop: "0.25rem" }}>
            Review OpenRouter request costs, model allocations, and transaction payloads.
          </p>
        </div>
        
        <button 
          className="back-home-btn" 
          onClick={fetchLogs}
          style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.4rem 0.75rem" }}
        >
          <RefreshCw size={14} /> Refresh Ledger
        </button>
      </div>

      {logs.length === 0 ? (
        <div className="dashboard-empty" style={{ minHeight: "350px", flex: 1 }}>
          <div className="dashboard-empty-icon">
            <Clock size={24} />
          </div>
          <p className="dashboard-empty-text">No AI transactions recorded for this project yet.</p>
        </div>
      ) : (
        /* Dual Pane Explorer Layout */
        <div style={{ display: "flex", gap: "1.5rem", flex: 1, minHeight: "500px" }}>
          
          {/* Left Panel: Grouped Explorer Tree */}
          <div style={{ 
            width: "350px", 
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            border: "1px solid var(--border-color)", 
            borderRadius: "12px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto"
          }}>
            <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", fontWeight: "700", color: "var(--text-muted)", marginBottom: "1rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
              Ledger Explorer
            </h4>

            <div className="explorer-tree" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {Object.keys(grouped).sort((a, b) => b - a).map(year => {
                const yearCollapsed = expandedNodes[year];
                const yearMonths = grouped[year];
                const totalLogsInYear = Object.values(yearMonths).reduce((acc, curr) => acc + curr.length, 0);

                return (
                  <div key={year} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {/* Year Row */}
                    <div 
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between", 
                        padding: "0.4rem 0.5rem", 
                        borderRadius: "8px", 
                        cursor: "pointer",
                        backgroundColor: "rgba(255, 255, 255, 0.02)"
                      }}
                      onClick={() => toggleNode(year)}
                      className="explorer-folder-header"
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.9rem", fontWeight: "600" }}>
                        {!yearCollapsed ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        {!yearCollapsed ? <FolderOpen size={14} style={{ color: "var(--primary)" }} /> : <Folder size={14} style={{ color: "var(--primary)" }} />}
                        <span>{year}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>({totalLogsInYear})</span>
                      </div>
                      
                      <button 
                        className="multiselect-badge-remove" 
                        style={{ padding: "0.2rem", background: "none", border: "none", color: "var(--error)", cursor: "pointer" }}
                        onClick={(e) => handleDeleteYearLogs(e, parseInt(year))}
                        title="Delete all logs for this year"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    {/* Months (nested) */}
                    {!yearCollapsed && (
                      <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.25rem" }}>
                        {Object.keys(yearMonths).map(month => {
                          const monthNodeId = `${year}-${month}`;
                          const monthCollapsed = expandedNodes[monthNodeId];
                          const monthLogs = yearMonths[month];

                          return (
                            <div key={month} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                              {/* Month Row */}
                              <div 
                                style={{ 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "space-between", 
                                  padding: "0.35rem 0.5rem", 
                                  borderRadius: "6px", 
                                  cursor: "pointer",
                                  backgroundColor: "rgba(255, 255, 255, 0.01)"
                                }}
                                onClick={() => toggleNode(monthNodeId)}
                                className="explorer-folder-header"
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: "500", color: "var(--text-primary)" }}>
                                  {!monthCollapsed ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                                  {!monthCollapsed ? <FolderOpen size={13} style={{ color: "var(--primary)" }} /> : <Folder size={13} style={{ color: "var(--primary)" }} />}
                                  <span>{month}</span>
                                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>({monthLogs.length})</span>
                                </div>

                                <button 
                                  className="multiselect-badge-remove" 
                                  style={{ padding: "0.15rem", background: "none", border: "none", color: "var(--error)", cursor: "pointer" }}
                                  onClick={(e) => handleDeleteMonthLogs(e, parseInt(year), month)}
                                  title="Delete all logs for this month"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>

                              {/* Individual Logs List (nested) */}
                              {!monthCollapsed && (
                                <div style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                                  {monthLogs.map(log => {
                                    const isSelected = selectedLog?.id === log.id;
                                    return (
                                      <div 
                                        key={log.id} 
                                        style={{ 
                                          display: "flex", 
                                          alignItems: "center", 
                                          justifyContent: "space-between", 
                                          padding: "0.3rem 0.5rem", 
                                          borderRadius: "4px", 
                                          cursor: "pointer",
                                          backgroundColor: isSelected ? "rgba(var(--primary-rgb), 0.15)" : "transparent",
                                          borderLeft: isSelected ? "2px solid var(--primary)" : "2px solid transparent"
                                        }}
                                        onClick={() => setSelectedLog(log)}
                                        className={`explorer-file-item ${isSelected ? "active" : ""}`}
                                      >
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                                          <FileText size={12} style={{ color: "var(--text-muted)" }} />
                                          <span>@{log.username} - {formatDate(log.timestamp).split(',')[1] || formatDate(log.timestamp)}</span>
                                        </div>

                                        <button 
                                          className="multiselect-badge-remove" 
                                          style={{ padding: "0.1rem", background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
                                          onClick={(e) => handleDeleteLog(e, log.id)}
                                          title="Delete this log entry"
                                        >
                                          <Trash2 size={11} />
                                        </button>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Selected Log Detail Panel */}
          <div style={{ 
            flex: 1, 
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            border: "1px solid var(--border-color)", 
            borderRadius: "12px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto"
          }}>
            {!selectedLog ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--text-muted)", gap: "1rem" }}>
                <BarChart2 size={32} style={{ opacity: 0.5 }} />
                <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                  Select an AI transaction log from the tree to view comprehensive metrics.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                
                {/* Log Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: 0, color: "var(--text-primary)" }}>
                      AI Transaction Details
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <User size={12} /> @{selectedLog.username}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Calendar size={12} /> {new Date(selectedLog.timestamp).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <span className={`user-role-badge ${selectedLog.finish_reason === "stop" ? "normal_user" : "administrator"}`} style={{ fontSize: "0.75rem", padding: "0.2rem 0.5rem" }}>
                    Reason: {selectedLog.finish_reason}
                  </span>
                </div>

                {/* Metrics Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  <div style={{ padding: "0.75rem 1rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Model Used</span>
                    <strong style={{ display: "block", fontSize: "0.85rem", color: "var(--accent)", marginTop: "0.25rem", wordBreak: "break-all" }}>
                      {selectedLog.model_used}
                    </strong>
                  </div>
                  <div style={{ padding: "0.75rem 1rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Tokens Allocation</span>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>
                      In: {selectedLog.input_tokens} | Out: {selectedLog.output_tokens}
                    </strong>
                  </div>
                  <div style={{ padding: "0.75rem 1rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Calculated Cost</span>
                    <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--success)", fontWeight: "700", marginTop: "0.25rem" }}>
                      {formatCost(selectedLog.cost)}
                    </strong>
                  </div>
                </div>

                {/* Request Prompt Payload */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, minHeight: "150px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-muted)" }}>Request Prompt Text</span>
                  <div style={{ 
                    flex: 1, 
                    backgroundColor: "rgba(0, 0, 0, 0.3)", 
                    border: "1px solid var(--border-color)", 
                    borderRadius: "8px", 
                    padding: "0.75rem", 
                    fontSize: "0.825rem", 
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-secondary)",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap"
                  }}>
                    {selectedLog.request_text || "No prompt text recorded."}
                  </div>
                </div>

                {/* Response Output Payload */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, minHeight: "150px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-muted)" }}>Response Output Text</span>
                  <div style={{ 
                    flex: 1, 
                    backgroundColor: "rgba(0, 0, 0, 0.3)", 
                    border: "1px solid var(--border-color)", 
                    borderRadius: "8px", 
                    padding: "0.75rem", 
                    fontSize: "0.825rem", 
                    fontFamily: "var(--font-mono)",
                    color: "white",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap"
                  }}>
                    {selectedLog.output_text || "No response content recorded."}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
