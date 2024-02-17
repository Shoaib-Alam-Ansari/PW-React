import { createContext, useContext } from "react";

 const BlogContext = createContext({
    blogs: [],
    addBlog: (blog) => {},
    deleteBlog: (id) => {},
    editBlog: (id, blog) => {}
 })

 export const BlogContextProvider = BlogContext.Provider

 export function UseBlogContext (){
    return useContext(BlogContext)
 }
