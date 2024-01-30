import React, { useState } from "react";
import { UseTodo } from "../../Context/Context";
import  { useDate } from "../Date/DateTime";

function TodoItems({ todos }) {
  const { deleteTodo, updateTodo } = UseTodo();
  const {date, wish} = useDate()

  return (
    <div className=" d-flex flex-column justify-content-around rounded gap-4 bg-black px-3 py-4 text-light mt-3">
      <div className=" d-flex flex-column gap-2">
        <span className="ps-3">
          <li className="p-0 fw-bold">{todos.todo}</li>
        </span>
        {/* <input type="text" value={todos.todo} /> */}

        <span className="" style={{ width: "120px" }}>
          Status: {todos.status ? <span className="text-success">Complete</span>: <span className="text-danger">Pending</span>}{" "}
        </span>
        <span>Date: {date } {wish}</span>
      </div>

      <div className="d-flex flex-column gap-2">
        <button className="btn btn-primary" onClick={() => updateTodo(todos.id)}>
          Update Status
        </button>
        <button
          className="btn btn-primary"
          onClick={() => deleteTodo(todos.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
