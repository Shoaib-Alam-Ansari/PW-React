import React from "react";

function EditBlogModal() {
  return (
    <>
      <div className="">
        <div className=" d-flex flex-column justify-content-center align-items-center ">
          <h1>Edit Blog</h1>
          <div className="col-6 bg-light rounded">
            <div className="py-4 px-3">
              <input type="text" className=" form-control mb-2" placeholder="Entet Blog Post Url" />
              <input type="text" className=" form-control mb-2" placeholder ="Enter Blog Title" />
              <input type="text" className=" form-control mb-2" placeholder ="Enter Blog Description" />
              <textarea  className=" form-control " placeholder ="Enter Blog Write"></textarea>
              <div className=" d-flex gap-2 mt-2">
                <button className=" btn btn-primary">Close</button>
                <button className=" btn btn-primary">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditBlogModal;
