import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import NumberInput from "./components/input/NumberInput";
import NumberInput2 from "./components/input/NumberInput2";
import DigitCheckInput from "./components/input/DigitCheckInput";
import PasswordInput from "./components/input/PasswordInput";

function App() {
  // const [todos, setTodos] = useState(["aaaaa","bbb","ccc"]);
  const [todos, setTodos] = useState([
    { id: 1, name: "Toddo1", completed: false },
  ]);
  const todoRef = useRef();

  // focus実装
  const handleFocus = () => {
    if (!todoRef.current.value) {
      todoRef.current.focus();
    }
  };

  React.useEffect(() => {
    handleFocus();
  }, [todoRef.current]);

  const handleAddTodo = () => {
    const name = todoRef.current.value;

    if (name === "") return;
    console.log(todoRef.current.value);

    setTodos((prevTodos, index) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoRef.current.value = null;
    handleFocus();
  };

  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const [name, setName] = useState("hoge");

  const btnHogeClick = (e) => {
    // window.alert(e.target.textContent);
    setName(e.target.textContent);
  };
  const btnFugaClick = (e) => {
    // console.log(e.target.textContent);
    setName(e.target.textContent);
  };

  const [count, setCount] = useState(0);
  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <div>Hello React</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/* TODO focus実装 */}
      <input type="text" ref={todoRef} onChange={handleFocus} />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleDeleteTodo}>削除</button>
      <div>残りタスク: {todos.filter((todo) => !todo.completed).length}</div>

      <hr />

      {/* ボタンを押下する毎に、テキストを取得し、値が切り替わる */}
      <p>こんにちは、{name}さん</p>
      <button type="button" onClick={btnHogeClick} value="hoge">
        hoge
      </button>
      <button type="button" onClick={btnFugaClick} value="fuga">
        fuga
      </button>

      <hr />
      {/* カウントする */}
      <button type="button" onClick={handleAddCount}>
        +
      </button>
      <button type="button" onClick={handleResetCount}>
        リセット
      </button>
      {count}

      <hr />
      {/* ドラッグ&ドロップ */}
      {/* <DragDropContext>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable>{(provided) => {
                <div>item0</div>
              }}</Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId="item-0" index={0}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    item0
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <hr />
      <h2>数値のみ入力 パターン1</h2>
      <NumberInput />
      <hr />
      <h2>数値のみ入力 パターン2</h2>
      <NumberInput2 />

      <hr />
      <h2>桁数チェック</h2>
      <DigitCheckInput maxDigits={5} />
      <hr />
      {/* formを作成し、入力値のチェックを行う */}
      <h2>入力値チェック</h2>
      <PasswordInput maxDigits={4} />

      <hr />
      <div>
        <div class="modal-overlay" id="modal-overlay">
          <div class="modal">
            <h2>Modal Title</h2>
            <p>This is a simple modal. Click outside to close it.</p>
          </div>
        </div>
        <button id="openModal">Open Modal</button>
      </div>
    </div>
  );
}

export default App;
