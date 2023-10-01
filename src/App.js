import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [todos, setTodos] = useState(["aaaaa","bbb","ccc"]);
  const [todos, setTodos] = useState([{id: 1, name: "Toddo1", completed: false}]);

  const todoRef = useRef();
  const handleAddTodo = () => {
    const name = todoRef.current.value;

    if(name==="") return;
    console.log(todoRef.current.value);

    setTodos((prevTodos, index) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoRef.current.value = null;
  };

  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  return (
    <div>
      <div>Hello React</div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      {/* TODO focus実装 */}
      <input type="text" ref={todoRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleDeleteTodo}>削除</button>
      <div>残りタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
