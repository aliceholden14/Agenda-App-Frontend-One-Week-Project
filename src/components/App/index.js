import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/index";
import NoteList from "../NoteList/index";
import Agenda from "../Agenda/index";

function App() {
  const [notes, setNotes] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [stateChange, setStateChange] = useState(false);

  // Map received API data into a format suitable for React components
  function mapApiData(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].dateTime = dataArray[i]["date"];
      delete dataArray[i].date;
      dataArray[i].onAgenda = dataArray[i]["on_agenda"];
      delete dataArray[i].on_agenda;
    }
    return dataArray;
  }

  // Build agenda list
  function buildAgenda(mappedData) {
    //console.log(mappedData);
    const agendaList = [];
    for (let i = 0; i < mappedData.length; i++) {
      if (mappedData[i].onAgenda === true) {
        agendaList.push(mappedData[i]);
      }
    }
    //console.log("Agenda List is:");
    //console.log(agendaList);
    return agendaList;
  }

  // Get all data from API
  async function getApiData() {
    const res = await fetch("http://localhost:5000/notes");
    const dataArray = await res.json();
    const mappedData = mapApiData(dataArray.data.rows);
    setNotes(mappedData);
    const agendaList = buildAgenda(mappedData);
    setAgenda(agendaList);
    //console.log(notes);
  }

  // Triggered everytime state changes
  useEffect(() => {
    getApiData();
  }, [stateChange]);

  // Post form data to API
  async function addLi(formEntry) {
    delete formEntry.dateTime;
    formEntry.userId = "student";
    //console.log(formEntry);
    const postData = await fetch("http://localhost:5000/notes", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formEntry),
    });
    const result = await postData.json;
    //console.log(result);
    setStateChange(!stateChange);
  }

  // Delete by ID from API
  async function deleteLi(id) {
    const res = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "delete",
    });
    const deletedId = await res.json();
    //console.log(deletedId);
    setStateChange(!stateChange);
  }

  // TODO
  function addToAgenda(formEntry) {
    setAgenda([...agenda, formEntry]);
  }

  // TODO
  async function deleteFromAgenda(id) {
    const res = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "patch",
      //headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ onAgenda: false }),
    });
    const removedId = await res.json();
    console.log(removedId);
    setStateChange(!stateChange);
  }

  return (
    <div id="main">
      <Form addLi={addLi} addToAgenda={addToAgenda} />

      <div id="noteAgenda">
        <NoteList notes={notes} deleteLi={deleteLi} addToAgenda={addToAgenda} />
        <Agenda agenda={agenda} deleteFromAgenda={deleteFromAgenda} />
      </div>
      <button onClick={() => getApiData()}>TEST BUTTON</button>
    </div>
  );
}

export default App;
