import React from "react";

function AgendaNote({ idx, text, deleteFromAgenda }) {
  return (
    <li key={idx}>
      <h4>{text.category}</h4>
      <h4>{text.priority}</h4>
      <h3>{text.title}</h3>
      <p>{text.description}</p>
      <button
        onClick={() => {
          return deleteFromAgenda(idx);
        }}
      >
        x
      </button>
    </li>
  );
}

export default AgendaNote;
