import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <ul>
            {todoList.map(({ id, title }) => (
            <TodoListItem key={id} todo={{ id, title }} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    )
}

export default TodoList;