import React, { useState } from "react";
import Note from "../Note/index";
import "../style.css";

function NoteList({ notes, deleteLi, addToAgenda }) {
  const [searchText, setSearchText] = useState();
  const [categoryFilter, setCategoryFilter] = useState("Technical/Code");
  const [priorityFilter, setPriorityFilter] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div id="notesContainer">
      <h1>Note Stash</h1>
      <div id="filterNotes">
        <input
          class="padding"
          placeholder="search"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <label for="category" class="padding">
          Category:
        </label>
        <select
          class="inputPadding"
          id="category"
          name="category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
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
          id="priority"
          name="priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
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
          id="startDateInput"
          name="dateInput"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          class="inputPadding"
          type="date"
          id="endDateInput"
          name="dateInput"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div id="noteList">
        <ul>
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
