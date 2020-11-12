import React from "react";
import "../style.css";

function Note({ idx, text, deleteLi, addToAgenda }) {
  return (
    <li key={idx}>
      <h1>{text.category}</h1>
      <h2>{text.priority}</h2>
      <h3>{text.title}</h3>
      <h4>{text.description}</h4>
      <p>{text.dateTime}</p>
      <button
        onClick={() => {
          return deleteLi(idx);
        }}
      >
        🗑️
      </button>
      <button
        onClick={() => {
          return addToAgenda(idx);
        }}
      >
        ➡️
      </button>
    </li>
  );
}

export default Note;
