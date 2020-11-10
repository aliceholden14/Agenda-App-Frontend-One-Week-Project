import "./App.css";
import React, { useState } from "react";
import Form from "../Form/index";
import NoteList from "../NoteList/index";
import Agenda from "../Agenda/index";

function App() {
  const [notes, setNotes] = useState([]);
  const [agenda, setAgenda] = useState([]);

  function addLi(formEntry) {
    setNotes([...notes, formEntry]);
  }

  function deleteLi(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }

  function addToAgenda(formEntry) {
    setAgenda([...agenda, formEntry]);
  }

  function deleteFromAgenda(index) {
    setAgenda([...agenda.slice(0, index), ...agenda.slice(index + 1)]);
  }

  return (
    <div>
      <Form addLi={addLi} addToAgenda={addToAgenda} />
      <NoteList notes={notes} deleteLi={deleteLi} addToAgenda={addToAgenda} />
      <Agenda agenda={agenda} deleteFromAgenda={deleteFromAgenda} />
    </div>
  );
}

export default App;
