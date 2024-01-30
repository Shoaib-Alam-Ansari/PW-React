import React, { useState } from "react";
import { UseTodo } from "../../Context/Context";

function AddTodo() {
  const {addTodo} = UseTodo()
  const [todo, setTodo] = useState("");


  const AddnewTodo = (e) => {
    e.preventDefault();
     if(!todo) return
    addTodo({todo, status: false});
    setTodo("");

  }

  return (
    <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 mt-5">

      <div className=" text-center">
      <h1 className="text-dark">Todo Web App</h1>
      </div>
      <div class="input-group mb-3 ">
        <input
          type="text"
          value={todo}
          class="form-control"
          placeholder="Write todo..."
          onChange={(e) => setTodo(e.target.value)}
          />
        <button class="btn btn-primary " type="button" id="button-addon2" onClick={AddnewTodo}>
          Add Todo
        </button>
          </div>
    </div>
  );
}

export default AddTodo;
