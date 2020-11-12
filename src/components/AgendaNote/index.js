import React from "react";
import "../style.css";

function AgendaNote({ idx, text, deleteFromAgenda }) {
  return (
    <li key={idx}>
      <h4>{text.category}</h4>
      <h4>{text.priority}</h4>
      <h3>{text.title}</h3>
      <p>{text.description}</p>
      <p>{text.dateTime}</p>
      <button
        onClick={() => {
          return deleteFromAgenda(idx);
        }}
      >
        🚫
      </button>
    </li>
  );
}

export default AgendaNote;
