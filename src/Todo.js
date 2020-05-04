import React from "react";

const TodoList = ({ items }) => {
  return <pre>{JSON.stringify(items)}</pre>;
};

export default TodoList;
