import React from "react";
import { X, AlertCircle } from "lucide-react";

export default function ModalAlert({
  isOpen,
  title = "Alert",
  message = "",
  onClose,
  confirmText = "Okay",
  onConfirm
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-header-title-area">
            <AlertCircle className="modal-icon-alert" size={20} />
            <h3>{title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          {onConfirm && (
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          )}
          <button 
            className="btn btn-primary" 
            onClick={() => {
              if (onConfirm) onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
