import React from "react";
import AgendaNote from "../AgendaNote/index";
import "../style.css";

function Agenda({ agenda, deleteFromAgenda, setQuery }) {
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
            onChange={(e) => setQuery("agenda", { search: e.target.value })}
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
            onChange={(e) =>
              setQuery("agenda", {
                category: e.target.value === "all" ? null : e.target.value,
              })
            }
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
            onChange={(e) =>
              setQuery("agenda", {
                priority: e.target.value === "all" ? null : e.target.value,
              })
            }
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
            id="sortByAgenda"
            name="sortBy"
            onChange={(e) => setQuery("agenda", { order: e.target.value })}
          >
            <option value="" disabled selected hidden>
              Sort by...
            </option>
            <option value="descending">Newest Entries</option>
            <option value="ascending">Oldest Entries</option>
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
          onChange={(e) => setQuery("agenda", { start: e.target.value })}
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
          onChange={(e) => setQuery("agenda", { end: e.target.value })}
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
