import React, { useState, useRef } from "react";
import "./styles.css";

// Ref
export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const saveTodoItem = () => {
    if (inputRef.current.value.trim().length === 0) {
      return;
    }
    const items = [...todos];
    items.push(inputRef.current.value.trim());
    setTodos(items);
    inputRef.current.value = "";
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>ToDo App</h1>
      <div className="App">
        <input type="text" name="textfield" ref={inputRef} />
        <button onClick={() => saveTodoItem()}>Save</button>
      </div>
      <div className="totoList">
        <TodoList items={todos} />
      </div>
    </>
  );
}

const TodoList = ({ items }) => {
  return <pre>{JSON.stringify(items)}</pre>;
};
