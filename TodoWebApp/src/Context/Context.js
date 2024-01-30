import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id)=> {}
});

export const TodoProvoder = TodoContext.Provider;

export const UseTodo = () => {
    return useContext(TodoContext)
}