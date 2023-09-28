//rafce
import React from 'react'
import Todo from './Todo';

const TodoList = ({todos}) => {
  console.log(todos);
  // return todos.map((todo) =>  <Todo todo={todo} />);
  return todos.map((todo) =>  {
    return (
        <li>{todo}</li>
    )

  });
};

export default TodoList;