import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };
        onAddTodo(newTodo);
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                name="title"
                type="text"
                id="todoTitle"
                placeholder="Enter title here..."
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                required
            >
                Title
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
