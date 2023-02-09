/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import ReactDOM from 'react-dom'

export default function todo() {
  const [todo, setToDo] = useState([]);
  const [enteredValue, setEnteredValue] = useState("");
  function addToDo() {
    setToDo((todos) => todos.concat(enteredValue));
    setEnteredValue("");
  }
  return (
    <div>
      <h2>Manish's ToDo</h2>
      <ul>
        {todo.map((eachToDo) => {
          return <li>{eachToDo}</li>;
        })}
      </ul>
      <input
        type="text"
        value={enteredValue}
        onChange={(e) => setEnteredValue(e.target.value)}
      />
      <button onClick={addToDo}>Add ToDo</button>
    </div>
  );
}
