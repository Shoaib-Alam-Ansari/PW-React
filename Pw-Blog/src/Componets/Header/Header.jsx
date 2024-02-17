import React from "react";
import AddBlogModal from "../AddBlogModal/AddBlogModal";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <Link to="/" className="nav-link">
          <h3>PwBlog</h3>
        </Link>
            <AddBlogModal/>
        </div>
    </nav>
  );
}

export default Header;
