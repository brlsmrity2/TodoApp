import React from "react";

const TodoListItems = (props) => {
  return (
    <div>
      <input type="checkbox" checked={props.completed} />
      <span> {props.title} </span>
      <button onClick={() => props.deleteTodoByIndex(props.index)}>Delete</button>
    </div>
  );
};

export default TodoListItems;
