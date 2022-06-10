import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Todos({ todos, deleteHandler }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5>
            {todo}{" "}
            <Button
              variant="outline-danger"
              onClick={() => deleteHandler(index)}
            >
              Delete
            </Button>
          </h5>
        </div>
      ))}
    </div>
  );
}
export default Todos;
