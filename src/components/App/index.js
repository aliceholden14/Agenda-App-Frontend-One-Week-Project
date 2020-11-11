import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/index";
import NoteList from "../NoteList/index";
import Agenda from "../Agenda/index";

function App() {
  const [notes, setNotes] = useState([]);
  const [agenda, setAgenda] = useState([]);

  async function getApiData() {
    const res = await fetch("http://localhost:5000/notes");
    const dataArray = await res.json();
    //console.log(dataArray.data.rows);
    return dataArray.data.rows;
  }

  async function loadApiData() {
    const dataArray = await getApiData();
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].dateTime = dataArray[i]["date"];
      delete dataArray[i].date;
      dataArray[i].onAgenda = dataArray[i]["on_agenda"];
      delete dataArray[i].on_agenda;
    }
    return dataArray;
  }

  useEffect(() => {
    const data = loadApiData();
    console.log(data);
    setNotes([]);
  }, []);

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
      <button onClick={() => loadApiData(getApiData())}>TEST BUTTON</button>
    </div>
  );
}

export default App;
