import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addInput(event) {
    setInputValue(event.target.value);
  }

  function addToDo() {
    setTodo([...todo, inputValue]);
    console.log(todo);
    setInputValue("");
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <ol>
          {todo.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ol>
      </div>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={addInput}
          placeholder="Enter your list"
        ></input>
        {inputValue !== "" ? (
          <button onClick={addToDo}>Add</button>
        ) : (
          <p>Please enter sometings</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
