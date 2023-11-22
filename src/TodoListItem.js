import React from "react";

function TodoListItem({ todoTitle, onRemoveTodo }) { 
  return (
    <li>
      {todoTitle}
      <button type="button" onClick={() => onRemoveTodo()}>Remove</button>
    </li>
  );
}

export default TodoListItem;
