import React, { useState } from "react";
import Note from "../Note/index";

function NoteList({ notes, deleteLi, addToAgenda }) {
  const [searchText, setSearchText] = useState();
  const [categoryFilter, setCategoryFilter] = useState("Technical/Code");
  const [priorityFilter, setPriorityFilter] = useState(1);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div id="notesContainer">
      <div id="filterNotes">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <label for="category">Category:</label>
        <select
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
        <label for="priority">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="1">1. High</option>
          <option value="2">2. Medium</option>
          <option value="3">3. Low</option>
        </select>
        <label for="dateInput">Date Range:</label>
        <input
          type="date"
          id="startDateInput"
          name="dateInput"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          id="endDateInput"
          name="dateInput"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div id="noteList">
        <h1>Note Stash:</h1>
        <ul>
          {notes.map((item, index) => {
            return (
              <Note
                idx={index}
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
