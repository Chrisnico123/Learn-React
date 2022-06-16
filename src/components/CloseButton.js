import React from "react";

function CloseButton({ id, onDelete }) {
  return (
    <div className="Close">
      <button className="Close-btn" onClick={() => onDelete(id)}>
        Close
      </button>
    </div>
  );
}

export default CloseButton;
