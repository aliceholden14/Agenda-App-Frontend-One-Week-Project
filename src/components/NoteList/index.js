import React from "react";
import Note from "../Note/index";

function NoteList({ notes, deleteLi, addToAgenda }) {
  return (
    <ul>
      {notes.map((item, index) => {
        console.log(index);
        return (
          <Note
            idx={index}
            text={item}
            deleteLi={deleteLi}
            addToAgenda={addToAgenda}
          />
        );
      })}
    </ul>
  );
}

export default NoteList;
