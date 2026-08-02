import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';
import TodoFilter from './TodoFilter';

export default function Todolists() {
  const [todos, setTodos] = useState([]);
  const [todotitle, setTodotitle] = useState('');
  const [status, setStatus] = useState('all');

  const addtodo = (e) => {
    e.preventDefault();

    if (todotitle.trim() === '') return;

    const newtodo = {
      id: todos.length + 1,
      title: todotitle,
      completed: false,
    };

    setTodos((prev) => [...prev, newtodo]);
    setTodotitle('');
  };

  const removtodo = (todoid) => {
    setTodos(todos.filter((todo) => todo.id !== todoid));
  };

  const edittodos = (todoid) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoid
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {

  if (status === "completed") return todo.completed;
  if (status === "active") return !todo.completed;
  return true;

  });

  return (
    <div className="todolist">
     <h1>Todo List</h1>

      <TodoFilter
        status={status}
        setStatus={setStatus}
      />

      <TodoForm
        todotitle={todotitle}
        setTodotitle={setTodotitle}
        addtodo={addtodo}
      />

      <TodoStats todos={todos} />

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={removtodo}
          onEdit={edittodos}
        />
      ))}
    </div>
  );
}