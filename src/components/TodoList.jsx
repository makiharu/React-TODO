//rafce
import React from 'react'
import Todo from './Todo';

const TodoList = ({todos}) => {
  console.log(todos);
  return todos.map((todo, index) =>  <Todo todo={todo} key={index}/>);
};

export default TodoList;