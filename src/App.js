import React, { useState } from "react";
import TodoList from "../src/todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexvalue) => {
    const newTodos = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <h1>Todo Management List</h1>
        <br />
        <br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            onChange={changeHandler}
            value={task}
            placeholder="enter"
          />
          <Button variant="outline-success">Success</Button>
          <br />
        </form>
        <br />
        <br />
        <TodoList todos={todos} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
};
export default App;
