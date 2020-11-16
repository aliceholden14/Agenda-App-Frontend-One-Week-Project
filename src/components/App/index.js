import "./App.css";
import React, { useEffect, useState } from "react";
import Form from "../Form/index";
import NoteList from "../NoteList/index";
import Agenda from "../Agenda/index";

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

function App() {
  const [notes, setNotes] = useState([]);
  const [notesQuery, setNotesQuery] = useState({
    start: null,
    end: null,
    priority: null,
    category: null,
    onAgenda: null,
  });
  const [agenda, setAgenda] = useState([]);
  const [agendaQuery, setAgendaQuery] = useState({
    start: null,
    end: null,
    priority: null,
    category: null,
    onAgenda: true,
  });
  const [stateChange, setStateChange] = useState(false);

  // Build API query string for GET method
  function buildQuery(queryObject) {
    let query = "?";
    for (const key in queryObject) {
      if (queryObject[key]) {
        query += `${key}=${queryObject[key]}&`;
      }
    }
    return query.slice(0, -1);
  }

  // Get query states from list components
  function setQuery(list, queryObject) {
    for (const key in queryObject) {
      if (queryObject[key] === "all") {
        queryObject[key] = null;
      }
    }
    if (list === "notes") {
      setNotesQuery(queryObject);
    } else if (list === "agenda") {
      setAgendaQuery(queryObject);
    }
    //setNotesQuery(queryObject);
    setStateChange(!stateChange);
  }

  // Map received API data into a format suitable for React components
  function mapApiData(dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i].dateTime = dataArray[i]["date"].slice(0, 10);
      delete dataArray[i].date;
      dataArray[i].onAgenda = dataArray[i]["on_agenda"];
      delete dataArray[i].on_agenda;
    }
    return dataArray;
  }

  // Get all data from API and set states for Notes list
  async function getNotesList() {
    const res = await fetch(`${url}/notes` + buildQuery(notesQuery));
    const dataArray = await res.json();
    const mappedData = mapApiData(dataArray.data.rows);
    setNotes(mappedData);
  }

  // Get all data from API and set states for Agenda list
  async function getAgendaList() {
    const res = await fetch(`${url}/notes` + buildQuery(agendaQuery));
    const dataArray = await res.json();
    const mappedData = mapApiData(dataArray.data.rows);
    setAgenda(mappedData);
  }

  // useEffect triggered everytime state changes, a bit hacky right now as stateChange is just a boolean that is toggled
  useEffect(() => {
    getNotesList();
    getAgendaList();
  }, [stateChange]);

  // Post form data to API
  async function addLi(formEntry) {
    delete formEntry.dateTime;
    formEntry.userId = "student";
    const postData = await fetch(`${url}/notes`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formEntry),
    });
    const result = await postData.json;
    setStateChange(!stateChange);
  }

  // Delete by ID from API
  async function deleteLi(id) {
    const res = await fetch(`${url}/notes/${id}`, {
      method: "delete",
    });
    const deletedId = await res.json();
    setStateChange(!stateChange);
  }

  // Set onAgenda to true for note by ID
  async function addToAgenda(id) {
    const res = await fetch(`${url}/notes/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ onAgenda: true }),
    });
    const addedId = await res.json();
    setStateChange(!stateChange);
  }

  // Set onAgenda to false for note by ID
  async function deleteFromAgenda(id) {
    const res = await fetch(`${url}/notes/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ onAgenda: false }),
    });
    const removedId = await res.json();
    setStateChange(!stateChange);
  }

  // Create React components
  return (
    <div id="main">
      <div id="TitleForm">
        <h1 id="agendify">Agendify</h1>
        <Form addLi={addLi} addToAgenda={addToAgenda} />
      </div>
      <div id="noteAgenda">
        <NoteList
          className="noteAgendaChild"
          notes={notes}
          deleteLi={deleteLi}
          addToAgenda={addToAgenda}
          setQuery={setQuery}
        />
        <Agenda
          className="noteAgendaChild"
          agenda={agenda}
          deleteFromAgenda={deleteFromAgenda}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}

export default App;
