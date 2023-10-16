import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
      id: 1,
      title: "React class",
    },
    {
      id: 2,
      title: "React mentor session",
    },
    {
      id: 3,
      title: "React homework",
    }
    
  ];
  
function TodoList () {
    return (
        <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
        </ul>

    )
}

export default TodoList;