import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState(''); 

    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };
        onAddTodo(newTodo);
        console.log(todoTitle);
        setTodoTitle('');
    }


    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }


    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                name="title" 
                type="text" 
                id="todoTitle" 
                placeholder="Enter title here..." 
                value={todoTitle}
                onChange={handleTitleChange}
                required  
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm;
