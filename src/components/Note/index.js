import React from "react";

function Note({ idx, text, deleteLi }) {
  return (
    <li key={idx}>
      <h1>{text.category}</h1>
      <h2>{text.priority}</h2>
      <h3>{text.title}</h3>
      <h4>{text.description}</h4>
      <button
        onClick={() => {
          return deleteLi(idx);
        }}
      >
        x
      </button>
    </li>
  );
}

export default Note;
