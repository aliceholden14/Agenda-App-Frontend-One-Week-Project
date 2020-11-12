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
      <h1>Agenda</h1>
      <div id="filterAgenda">
        <input
          placeholder="search"
          type="text"
          value={searchAgenda}
          onChange={(e) => setSearchAgenda(e.target.value)}
        />
        <label for="category" class="padding">
          Category:
        </label>
        <select
          class="inputPadding"
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
        <label for="priority" class="padding">
          Priority:
        </label>
        <select
          class="inputPadding"
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
        <label for="dateInput" class="padding">
          Date Range:
        </label>
        <input
          class="inputPadding"
          type="date"
          id="startDateInputAgenda"
          name="dateInput"
          value={startDateAgenda}
          onChange={(e) => setStartDateAgenda(e.target.value)}
        />
        <input
          class="inputPadding"
          type="date"
          id="endDateInputAgenda"
          name="dateInput"
          value={endDateAgenda}
          onChange={(e) => setEndDateAgenda(e.target.value)}
        />
        <label for="sortBy" class="padding">
          Sort By:
        </label>
        <select
          class="inputPadding"
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
    </div>
  );
}

export default Agenda;
