import React, { useState } from "react";
import "../style.css";

let today = new Date();
let date =
  today.getDate() +
  "-" +
  (today.getMonth() + 1) +
  "-" +
  today.getFullYear() +
  " " +
  today.getHours() +
  ":" +
  today.getMinutes();

function Form({ addLi, addToAgenda }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Code");
  const [priority, setPriority] = useState(1);
  const [description, setDescription] = useState("");
  const [onAgenda, setOnAgenda] = useState(false);
  const [dateTime, setDateTime] = useState(date);

  const formEntry = {
    title: title,
    category: category,
    priority: priority,
    description: description,
    onAgenda: onAgenda,
    dateTime: dateTime,
  };

  function clearForm() {
    setTitle("");
    setDescription("");
    setCategory("Code");
    setOnAgenda(false);
    setPriority(1);
  }

  function getTimestamp() {
    let today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes();
    return setDateTime(date);
  }

  return (
    <div id="inputForm">
      <h3>Create a note</h3>

      <div id="topLineForm">
        <span id="titleLabel">
          <label for="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
        <span id="categoryLabel">
          <label for="category">Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="none">None</option>
            <option value="javascript">JavaScript</option>
            <option value="industry">Industry</option>
            <option value="databases">Databases</option>
            <option value="front-end">Front-End</option>
            <option value="design patterns">Design Patterns</option>
          </select>
        </span>
        <span id="priorityLabel">
          <label for="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">1. High</option>
            <option value="2">2. Medium</option>
            <option value="3">3. Low</option>
          </select>
        </span>
      </div>
      <div id="descriptionBox">
        <label for="description">Description:</label>
        <input
          id="description"
          type="text"
          value={description}
          name="description"
          placeholder="Write a more detailed description of your note/query..."
          style={{ height: "120px", width: "600px" }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {/* <div id="lastLineForm"> */}
      <span id="checkboxForm">
        <input
          id="checkbox"
          type="checkbox"
          value={onAgenda}
          name="checkbox"
          checked={onAgenda}
          onChange={() => setOnAgenda(!onAgenda)}
        />
        <label for="checkbox">Add to your agenda.</label>
      </span>
      <span id="buttonSpan">
        <button
          id="submitButton"
          onClick={() => {
            addLi(formEntry);
            getTimestamp();
            clearForm();
          }}
        >
          Submit
        </button>
      </span>
    </div>
    // </div>
  );
}

export default Form;
