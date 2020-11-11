import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/index";
import NoteList from "../NoteList/index";
import Agenda from "../Agenda/index";

function App() {
  const [notes, setNotes] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  function mapApiData(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].dateTime = dataArray[i]["date"];
      delete dataArray[i].date;
      dataArray[i].onAgenda = dataArray[i]["on_agenda"];
      delete dataArray[i].on_agenda;
    }
    return dataArray;
  }

  async function getApiData() {
    const res = await fetch("http://localhost:5000/notes");
    const dataArray = await res.json();
    const mappedData = mapApiData(dataArray.data.rows);
    setNotes(mappedData);
  }

  useEffect(() => {
    getApiData();
  }, [stateChange]);

  async function addLi(formEntry) {
    //setNotes([...notes, formEntry]);
    delete formEntry.dateTime;
    formEntry.userId = "student";
    console.log(formEntry);
    const postData = await fetch("http://localhost:5000/notes", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formEntry),
    });
    const result = await postData.json;
    console.log(result);
    setStateChange(!stateChange);
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
      <button onClick={() => getApiData()}>TEST BUTTON</button>
    </div>
  );
}

export default App;
