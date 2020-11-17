import React, { useState, useEffect } from "react";
import Note from "../Note/index";
import "../style.css";

function NoteList({ notes, deleteLi, addToAgenda, setQuery }) {
  const [searchText, setSearchText] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [order, setOrder] = useState("descending");

  useEffect(() => {
    setQuery("notes", {
      search: searchText,
      start: startDate,
      end: endDate,
      priority: priorityFilter,
      category: categoryFilter,
      order: order,
    });
  }, [
    setQuery,
    searchText,
    categoryFilter,
    priorityFilter,
    startDate,
    endDate,
    order,
  ]);

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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
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
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
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
            value={order}
            onChange={(e) => setOrder(e.target.value)}
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
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
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
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
