import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Componets/Header/Header";
import "./App.css";
import BlogRoute from "./Route/BlogRoute";
import { useEffect, useState } from "react";
import { BlogContextProvider } from "./Context/BlogContext";

function App() {
  const [blogs, setBlogs] = useState([]);
  const addBlog = (blog) => {
    setBlogs((prevBlog) => [{ ...blog}, ...prevBlog]);
  };

  const deleteBlog = (id) => {
    setBlogs((prevBlog) => prevBlog.filter((prev)  => prev.id !== id))

  }

  const editBlog = (id, blog) => {
    setBlogs((prevBlog) => prevBlog.map((prev) => prev.id === id ? blog : prev))
  }

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('blog'));
  if (items) {
   setBlogs(items);
  }
}, []);


useEffect(() => {
  localStorage.setItem('blog', JSON.stringify(blogs));
}, [blogs]);

  return (
    <BlogContextProvider value={{ blogs, addBlog, deleteBlog, editBlog }}>
      <div className="">
        <Header />
        <div className="container">
          <div className="row">
            <BlogRoute />
          </div>
        </div>
      </div>
    </BlogContextProvider>
  );
}

export default App;
