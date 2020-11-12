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
      <h1>Agenda</h1>
      <div id="filterAgenda">
        <div className="dropDowns">
          <input
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            placeholder="Search agenda..."
            type="text"
            value={searchAgenda}
            onChange={(e) => setSearchAgenda(e.target.value)}
          />
          <select
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            class="inputPadding"
            id="categoryAgenda"
            name="category"
            value={categoryFilterAgenda}
            onChange={(e) => setCategoryFilterAgenda(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Choose Category...
            </option>
            <option value="all">All</option>
            <option value="javascript">JavaScript</option>
            <option value="industry">Industry</option>
            <option value="databases">Databases</option>
            <option value="front-end">Front-End</option>
            <option value="design patterns">Design Patterns</option>
          </select>
          <select
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            class="inputPadding"
            id="priorityAgenda"
            name="priority"
            value={priorityFilterAgenda}
            onChange={(e) => setPriorityFilterAgenda(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Choose Priority...
            </option>
            <option value="all">All</option>
            <option value="1">1. High</option>
            <option value="2">2. Medium</option>
            <option value="3">3. Low</option>
          </select>
          <select
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            class="inputPadding"
            id="sortBy"
            name="sortBy"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Sort by...
            </option>
            <option value="Ascending">Newest Entries</option>
            <option value="Descending">Oldest Entries</option>
          </select>
        </div>
        <label for="dateInput" class="padding">
          Filter By Date:
        </label>
        <input
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "7px",
            outline: "none",
          }}
          class="inputPadding"
          type="date"
          id="startDateInputAgenda"
          name="dateInput"
          value={startDateAgenda}
          onChange={(e) => setStartDateAgenda(e.target.value)}
        />
        <input
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "7px",
            outline: "none",
          }}
          class="inputPadding"
          type="date"
          id="endDateInputAgenda"
          name="dateInput"
          value={endDateAgenda}
          onChange={(e) => setEndDateAgenda(e.target.value)}
        />
      </div>
      <div id="agendaList">
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
