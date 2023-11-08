import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState(key, initialState) {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    return savedValue !== null ? savedValue : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

  function addTodo(newTodo) {
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
