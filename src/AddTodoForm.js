import React from "react";

function AddTodoForm() {
    return (
    <form>
        <label htmlFor="todoTitle">Title</label>
        <input type="text" id="todoTitle" placeholder="Enter title here..." required />
        <button type="submit">Add</button>
    </form>
    )
}

export default AddTodoForm;
