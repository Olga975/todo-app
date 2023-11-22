import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <ul>
            {todoList.map(({ id, title }) => (
                <TodoListItem key={id} todoTitle={title} onRemoveTodo={() => onRemoveTodo(id)} />
            ))}
        </ul>
    )
}

export default TodoList;
