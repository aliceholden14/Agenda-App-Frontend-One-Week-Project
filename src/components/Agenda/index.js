import React, { useState, useEffect } from "react";
import AgendaNote from "../AgendaNote/index";
import "../style.css";

function Agenda({ agenda, deleteFromAgenda, setQuery }) {
  const [searchAgenda, setSearchAgenda] = useState();
  const [categoryFilterAgenda, setCategoryFilterAgenda] = useState(null);
  const [priorityFilterAgenda, setPriorityFilterAgenda] = useState(null);
  const [startDateAgenda, setStartDateAgenda] = useState(null);
  const [endDateAgenda, setEndDateAgenda] = useState(null);
  const [sortValue, setSortValue] = useState();

  useEffect(() => {
    setQuery("agenda", {
      start: startDateAgenda,
      end: endDateAgenda,
      priority: priorityFilterAgenda,
      category: categoryFilterAgenda,
      onAgenda: true,
    });
  }, [
    categoryFilterAgenda,
    priorityFilterAgenda,
    startDateAgenda,
    endDateAgenda,
  ]);

  return (
    <div id="agendaContainer">
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
          <option value="all">All</option>
          <option value="javascript">JavaScript</option>
          <option value="industry">Industry</option>
          <option value="databases">Databases</option>
          <option value="front-end">Front-End</option>
          <option value="design patterns">Design Patterns</option>
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
          <option value="all">All</option>
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
