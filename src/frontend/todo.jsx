/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todo.css";
import TodoCard from "./todo-card";
export default function todo() {
  const [lastTaskID,setlastTaskID] = useState(2)
  const [todo, setToDo] = useState([]);
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredDesc,setenteredDesc] = useState("");
  function addToDo() {
    if (enteredTitle !== "" && enteredDesc !=="") {
      let currentTodo = {
        taskID:lastTaskID+1,
        taskHeader: enteredTitle,
        taskContent: enteredDesc,
        taskDate: new Date().toLocaleDateString(),
      };
      console.log(currentTodo);
      //Add Value to Database

      fetch('http://localhost:5000/todo/addToDo', {
        method: 'POST',
        body: JSON.stringify(currentTodo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });

      //Local Data Storage
      setToDo((todos) => todos.concat(currentTodo));
      setenteredTitle("");
      setenteredDesc("");
      setlastTaskID(currentTodo.taskID)
      toast("ToDo added Successfully", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        type: "success",
      });
    } else
      toast("Please add a ToDo", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "light",
        type: "error",
      });
  }
  return (
    <div className="mainHeader">
      <div className="newForm">
      <h2>Manish's ToDo</h2>
      <div className="newForm-inputs">
        <input
          type="text"
          value={enteredTitle}
          placeholder="Title"
          onChange={(e) => setenteredTitle(e.target.value)}
          className="todo-title"
        />
        <input
          type="text"
          value={enteredDesc}
          placeholder="Description"
          onChange={(e) => setenteredDesc(e.target.value)}
          className="todo-title"
        />
        </div>
        <button onClick={addToDo} className="addToDo">
          Add ToDo
        </button>
      </div>
      <div className="todoHolder">
        <TodoCard />
      </div>
      <ToastContainer />
    </div>
  );
}
