import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogItems from "../Componets/BlogItems/BlogItems";
import ReadBlogPage from "../Componets/ReadBlogPage/ReadBlogPage";

function BlogRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogItems />} />
        <Route path="read-blog/:title/:id" element={<ReadBlogPage />} />
      </Routes>
    </>
  );
}

export default BlogRoute;
