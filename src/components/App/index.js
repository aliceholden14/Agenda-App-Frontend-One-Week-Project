import "./App.css";
import React, { useState } from "react";
import Form from "../Form/index";
import List from "../List/index";

function App() {
  const [notes, setNotes] = useState([]);

  function addLi(formEntry) {
    setNotes([...notes, formEntry]);
  }

  function deleteLi(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }
  return (
    <div>
      <Form addLi={addLi} />
      <List notes={notes} deleteLi={deleteLi} />
    </div>
  );
}

export default App;
