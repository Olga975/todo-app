import React from "react";

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
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>

    )
}

export default TodoList;