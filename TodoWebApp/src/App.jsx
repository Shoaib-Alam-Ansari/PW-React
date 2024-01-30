import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoItems from "./Components/TodoItems/TodoItems";
import { TodoProvoder } from "./Context/Context";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const deleteTodo = (id) => {
    setTodos((todo) => todo.filter((prevTodo) => prevTodo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  const updateTodo = (id) => {
    setTodos((prevtodo) =>
      prevtodo.map((prev) => prev.id === id ? {...prev,  status: !prev.status} : prev)
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvoder value={{ todos, addTodo, deleteTodo, updateTodo }}>
      <div className="" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center">
              {/* Add New Todo  */}
              <AddTodo />
            </div>
            {/* Todo Items List */}
            <ol className="row p-0 m-0">
              {todos &&
                todos.map((todo) => (
                  <div className=" col-12 col-sm-4 col-md-4 col-lg-3 px-5 px-sm-2">
                    <div key={todo.id}>
                      <TodoItems todos={todo} />
                    </div>
                  </div>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </TodoProvoder>
  );
}

export default App;
