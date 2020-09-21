import React, { useState } from 'react';

import { TodoList } from './components/TodoList/index';
import { AddTodoForm } from './components/AddTodoForm/index';

import './AppStyles.css'



const initialTodos: Array<Todo> = [


]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, done: false }])
  }

  return (
    <React.Fragment >
      <div className='content'>
        <h1>Tarefas a fazer </h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </div>
    </React.Fragment>
  );
}

export default App;
