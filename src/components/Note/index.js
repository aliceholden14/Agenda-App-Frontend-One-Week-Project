import React from "react";
import "../style.css";

function Note({ idx, text, deleteLi, addToAgenda }) {
  return (
    <li key={idx} id="noteItem">
      <div id="noteHeader">
        <h4 id="title">{text.title}</h4>
      </div>
      <div id="descPrig">
        <div id="noteDesc">
          <p id="description">{text.description}</p>
        </div>

        <div id="notePrig">
          <p id="category">{text.category}</p>
          <p id="priority">{text.priority}</p>
        </div>
      </div>
      <div id="noteFooter">
        <div id="noteDeleteButton">
          <button
            id="deleteBut"
            onClick={() => {
              return deleteLi(idx);
            }}
          >
            🗑️
          </button>
        </div>
        <div id="noteTD">
          <p id="dateTime">{text.dateTime}</p>
        </div>

        <div id="noteAddButton">
          <button
            id="addBut"
            onClick={() => {
              return addToAgenda(idx);
            }}
          >
            ➡️
          </button>
        </div>
      </div>
    </li>
  );
}

export default Note;
