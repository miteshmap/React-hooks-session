import React, { useState, useRef } from "react";
import "./styles.css";

// Ref
export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const saveTodoItem = () => {
    const newTodos = todos;
    newTodos.push(inputRef.current.value);
    inputRef.current.value = "";
    setTodos(newTodos);
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

const TodoList = props => {
  console.log(props.items);
  return props.items.length > 0 ? (
    <pre>{JSON.stringify(props.items)}</pre>
  ) : null;
};
