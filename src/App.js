import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["aaaaa","bbb","ccc"]);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>Hello React</div>
      <TodoList todos={todos}/>
      {/* TODO focus実装 */}
      <input type="text" />
      <button onClick="clickHandler">追加</button>
      <button>削除</button>
      <div>残りタスク: {count}</div>
    </div>
  );
}

export default App;
