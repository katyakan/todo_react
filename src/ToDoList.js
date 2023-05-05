import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>TODO List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.elements);
          const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements['todo-type'].value,
            done: false,
            createdAt: new Date().getTime(),
          };
          addTodo(todo);
          e.target.reset();
        }}
      >
        <input type="text" name="content" placeholder="TODO content" />

        <label htmlFor="personal">personal</label>
        <input
          type="radio"
          name="todo-type"
          value="personal"
          id="personal"
        ></input>
        <label htmlFor="business">business</label>
        <input
          type="radio"
          name="todo-type"
          value="business"
          id="business"
        ></input>

        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  const newTodos = [...todos];
                  newTodos[index].done = e.target.checked;
                  setTodos(newTodos);
                }}
              />
              <span className={`bubble ${todo.category}`}></span>
            </label>
            <div className="todo-content">
              {todo.content}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
