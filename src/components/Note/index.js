import React from "react";
import "../style.css";

function Note({ idx, text, deleteLi, addToAgenda }) {
  return (
    <li key={idx}>
      <p id="category">{text.category}</p>
      <p id="priority">{text.priority}</p>
      <p id="title">{text.title}</p>
      <p id="description">{text.description}</p>
      <p id="dateTime">{text.dateTime}</p>
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
