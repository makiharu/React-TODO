import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from "react";
import Main from "./components/Main";
import Confirm from "./components/Confirm";

function App() {
  return (
    <div>
      <div>Hello World</div>
      <Main />
      <Confirm />
    </div>
  );
}

export default App;
