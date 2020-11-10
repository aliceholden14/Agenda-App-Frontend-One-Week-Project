import React, { useState } from "react";

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

  function isAgendaClicked() {
    if (formEntry.onAgenda === true) {
      return addToAgenda(formEntry);
    } else return;
  }

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
      <h3>Make a new note:</h3>
      <div id="topLineForm">
        <label for="title">Title:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="1">1. High</option>
          <option value="2">2. Medium</option>
          <option value="3">3. Low</option>
        </select>
      </div>
      <div id="descriptionBox">
        <label for="description">Description:</label>
        <input
          id="description"
          type="text"
          value={description}
          name="description"
          placeholder="Write a more detailed description of your note/query..."
          style={{ height: "120px", width: "200px" }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div id="lastLineForm">
        <input
          id="checkbox"
          type="checkbox"
          value={onAgenda}
          name="checkbox"
          checked={onAgenda}
          onChange={() => setOnAgenda(!onAgenda)}
        />
        <label for="checkbox">Add to your agenda.</label>
        <button
          onClick={() => {
            addLi(formEntry);
            isAgendaClicked();
            getTimestamp();
            clearForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Form;
