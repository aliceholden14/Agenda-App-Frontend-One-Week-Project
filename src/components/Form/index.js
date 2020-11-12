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
  const [isOpen, setIsOpen] = useState(false);
  const [showOrHide, setShowOrHide] = useState({ display: "none" });
  const [inputForm, setInputForm] = useState({ height: "20px" });

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

  function showOrHideDiv() {
    if (isOpen === false) {
      setIsOpen(true);
      setShowOrHide({
        display: "block",
      });
      setInputForm({
        height: "250px",
      });
    } else {
      setIsOpen(false);
      setShowOrHide({
        display: "none",
      });
      setInputForm({
        height: "20px",
      });
    }
  }

  return (
    <div id="inputForm" style={inputForm}>
      <button id="createNote" onClick={() => showOrHideDiv()}>
        Create a note
      </button>
      <div id="showOrHide" style={showOrHide}>
        <div id="topLineForm">
          <span id="titleLabel">
            <input
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "7px",
                outline: "none",
              }}
              id="title"
              type="text"
              name="title"
              placeholder="Enter your title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
          <br></br>
          <span id="categoryLabel">
            <select
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "7px",
                outline: "none",
              }}
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected hidden>
                Choose Category...
              </option>
              <option value="none">None</option>
              <option value="javascript">JavaScript</option>
              <option value="industry">Industry</option>
              <option value="databases">Databases</option>
              <option value="front-end">Front-End</option>
              <option value="design patterns">Design Patterns</option>
            </select>
          </span>
          <span id="priorityLabel">
            <select
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "7px",
                outline: "none",
              }}
              id="priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="" selected hidden>
                Choose Priority...
              </option>
              <option value="1">1. High</option>
              <option value="2">2. Medium</option>
              <option value="3">3. Low</option>
            </select>
          </span>
        </div>
        <div id="descriptionBox">
          <textarea
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "7px",
              outline: "none",
            }}
            id="description"
            type="text"
            value={description}
            name="description"
            rows="7"
            cols="55"
            wrap="soft"
            placeholder="Write a more detailed description of your note/query..."
            // style={{ height: "120px", width: "600px" }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div id="lastLineForm">
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
      </div>
    </div>
  );
}

export default Form;
