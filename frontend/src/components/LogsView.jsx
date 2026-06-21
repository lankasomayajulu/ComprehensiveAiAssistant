import React, { useState, useEffect } from "react";
import { Clock, RefreshCw, BarChart2 } from "lucide-react";

export default function LogsView({ projectId, token }) {
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
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
      minute: '2-digit',
      second: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="dashboard-empty">
        <p className="dashboard-empty-text">Loading intelligence logs...</p>
      </div>
    );
  }

  return (
    <div className="logs-table-wrapper">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <div>
          <h3 className="pane-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <BarChart2 size={20} className="text-primary" /> AI Usage Ledger
          </h3>
          <p className="pane-subtitle" style={{ marginBottom: 0 }}>
            Review OpenRouter request costs, model allocations, and response details.
          </p>
        </div>
        
        <button 
          className="back-home-btn" 
          onClick={fetchLogs}
          style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.4rem 0.75rem" }}
        >
          <RefreshCw size={14} /> Refresh Logs
        </button>
      </div>

      {logs.length === 0 ? (
        <div className="dashboard-empty" style={{ minHeight: "250px" }}>
          <div className="dashboard-empty-icon">
            <Clock size={24} />
          </div>
          <p className="dashboard-empty-text">No AI invocations logged for this project yet.</p>
        </div>
      ) : (
        <div className="glass-card" style={{ overflow: "hidden" }}>
          <table className="logs-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>User</th>
                <th>Model</th>
                <th style={{ textAlign: "right" }}>Input Tokens</th>
                <th style={{ textAlign: "right" }}>Output Tokens</th>
                <th style={{ textAlign: "right" }}>Cost</th>
                <th>Finish Reason</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td>{formatDate(log.timestamp)}</td>
                  <td>@{log.username}</td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent)" }}>
                    {log.model_used}
                  </td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>{log.input_tokens}</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>{log.output_tokens}</td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--success)", fontWeight: "600" }}>
                    {formatCost(log.cost)}
                  </td>
                  <td>
                    <span 
                      className={`user-role-badge ${log.finish_reason === "stop" ? "normal_user" : "administrator"}`}
                      style={{ fontSize: "0.7rem", padding: "0.1rem 0.4rem" }}
                    >
                      {log.finish_reason}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
