import React from "react";
import "../style.css";

function AgendaNote({ idx, text, deleteFromAgenda }) {
  return (
    <li key={idx} id="agendaItem">
      <div id="priegory">
        <h4>{text.category}</h4>
        <h4>{text.priority}</h4>
      </div>
      <div id="noteInfo">
        <div id="agnTitle">
          <h3>{text.title}</h3>
        </div>
        <div id="agnDesc">
          <p>{text.description}</p>
        </div>
        <div id="agnFooter">
          <div id="agnButton">
            <button
              onClick={() => {
                return deleteFromAgenda(idx);
              }}
            >
              🚫
            </button>
          </div>
          <div id="agnDT">
            <p>{text.dateTime}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default AgendaNote;
