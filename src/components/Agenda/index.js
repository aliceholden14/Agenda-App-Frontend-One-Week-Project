import React, { useState } from "react";
import AgendaNote from "../AgendaNote/index";
import "../style.css";

function Agenda({ agenda, deleteFromAgenda }) {
  const [searchAgenda, setSearchAgenda] = useState();
  const [categoryFilterAgenda, setCategoryFilterAgenda] = useState(
    "Technical/Code"
  );
  const [priorityFilterAgenda, setPriorityFilterAgenda] = useState(1);
  const [startDateAgenda, setStartDateAgenda] = useState();
  const [endDateAgenda, setEndDateAgenda] = useState();
  const [sortValue, setSortValue] = useState();

  return (
    <div id="agendaContainer">
      <div id="filterAgenda">
        <input
          placeholder="search"
          type="text"
          value={searchAgenda}
          onChange={(e) => setSearchAgenda(e.target.value)}
        />
        <label for="category">Category:</label>
        <select
          id="categoryAgenda"
          name="category"
          value={categoryFilterAgenda}
          onChange={(e) => setCategoryFilterAgenda(e.target.value)}
        >
          <option value="Technical/Code">Technical/Coding</option>
          <option value="Industry">Industry/Real World</option>
          <option value="Team Working">Team Working</option>
          <option value="Misc.">Miscellaneous</option>
        </select>
        <label for="priority">Priority:</label>
        <select
          id="priorityAgenda"
          name="priority"
          value={priorityFilterAgenda}
          onChange={(e) => setPriorityFilterAgenda(e.target.value)}
        >
          <option value="1">1. High</option>
          <option value="2">2. Medium</option>
          <option value="3">3. Low</option>
        </select>
        <br></br>
        <label for="dateInput">Date Range:</label>
        <input
          type="date"
          id="startDateInputAgenda"
          name="dateInput"
          value={startDateAgenda}
          onChange={(e) => setStartDateAgenda(e.target.value)}
        />
        <input
          type="date"
          id="endDateInputAgenda"
          name="dateInput"
          value={endDateAgenda}
          onChange={(e) => setEndDateAgenda(e.target.value)}
        />
        <label for="sortBy">Sort By:</label>
        <select
          id="sortBy"
          name="sortBy"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="Ascending">Newest Entries</option>
          <option value="Descending">Oldest Entries</option>
        </select>
      </div>
      <div id="agendaList">
        <h1>Agenda:</h1>
        <ul>
          {agenda.map((item) => {
            return (
              <AgendaNote
                idx={item.id}
                text={item}
                deleteFromAgenda={deleteFromAgenda}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Agenda;
