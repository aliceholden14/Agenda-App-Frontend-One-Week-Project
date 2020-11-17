import React from "react";
import Note from "../Note/index";
import "../style.css";

function NoteList({ notes, deleteLi, addToAgenda, setQuery }) {
  return (
    <div id="notesContainer">
      <h1>Note Stash</h1>
      <div id="filterNotes">
        <div className="dropDowns">
          <input
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            class="padding"
            placeholder="Search notes..."
            type="text"
            onChange={(e) => setQuery("notes", { search: e.target.value })}
          />
          <select
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            class="inputPadding"
            id="category"
            name="category"
            onChange={(e) =>
              setQuery("notes", {
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
            id="priority"
            name="priority"
            onChange={(e) =>
              setQuery("notes", {
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
            id="sortBy"
            name="sortBy"
            onChange={(e) => setQuery("notes", { order: e.target.value })}
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
          id="startDateInput"
          name="dateInput"
          onChange={(e) => setQuery("notes", { start: e.target.value })}
        />
        <input
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "7px",
            outline: "none",
          }}
          class="inputPadding"
          type="date"
          id="endDateInput"
          name="dateInput"
          onChange={(e) => setQuery("agenda", { end: e.target.value })}
        />
      </div>
      <div id="noteList">
        <ul id="noteUL">
          {notes.map((item) => {
            return (
              <Note
                idx={item.id}
                text={item}
                deleteLi={deleteLi}
                addToAgenda={addToAgenda}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NoteList;
