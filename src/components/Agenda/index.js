import React from "react";
import AgendaNote from "../AgendaNote/index";

function Agenda({ agenda, deleteFromAgenda }) {
  return (
    <div>
      <h1>Agenda:</h1>
      <ul>
        {agenda.map((item, index) => {
          return (
            <AgendaNote
              idx={index}
              text={item}
              deleteFromAgenda={deleteFromAgenda}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Agenda;
