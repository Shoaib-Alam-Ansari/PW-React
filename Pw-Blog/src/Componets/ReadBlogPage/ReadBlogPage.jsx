import React from "react";
import { useParams } from "react-router-dom";
import { UseBlogContext } from "../../Context/BlogContext";
function ReadBlogPage() {
  const { blogs } = UseBlogContext();
  const { id } = useParams();
  return (
    <>
      {blogs.map((blogId) =>
        blogId.id == id ? (
            <div className="container">
          <div className=" mt-3 blog-item  bg-body-secondary rounded p-2">
              <div
                class="card text-light"
                style={{ backgroundColor: "#6f2cf5" }}
              >
                <div class="row g-0">
                  <div class="  col-12 col-md-4 p-2">
                    <img
                      src={blogId.url}
                      alt="..."
                      style={{ height: "15rem" }}
                      className=" img-fluid img-thumbnail"
                    />
                  </div>

                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"> {blogId.title}</h5>
                      <p class="card-text">{blogId.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-dark fw-light">
                <p className="mt-4">{blogId.write}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
}

export default ReadBlogPage;
