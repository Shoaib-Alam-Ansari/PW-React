import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { UseBlogContext } from "../../Context/BlogContext";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function BlogItems() {
  const { blogs, deleteBlog, editBlog } = UseBlogContext();
  const [editedBlog, setEditedBlog] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (id) => {
    let blogId = id;
    blogs.find((prevblog) =>
      prevblog.id == blogId ? setEditedBlog(prevblog) : ""
    );
    setShow(true);
  };
  const handleUpdate = () => {
    if(editedBlog.url !== "" && editedBlog.title !== "" && editedBlog.description !== "" && editedBlog.write !== ""){
      editBlog(editedBlog.id, editedBlog);
      handleClose(); // Close the modal after updating
    }

  };

  return (
    <>
      {blogs.map((blog) => (
        <div
          className=" p-2 col-12 col-sm-3 col-md-4 col-lg-3 col-xl-3 mt-2"
          key={blog.id}
        >
          <Card className="" id={blog.id}>
            <Card.Img
              variant="top"
              src={blog.url}
              style={{ height: "13rem" }}
            />
            <Card.Body>
              <Card.Title>{blog.title.substring(0, 20)}</Card.Title>
              <Card.Text>{blog.description.substring(0, 40)}</Card.Text>
              <Link
                to={`read-blog/${blog}/${blog.id}`}
                className="col-12 btn btn-primary"
                onClick={() => {}}
              >
                See more
              </Link>
              <div className="mt-1 d-flex gap-1">
                <Button
                  className="btn btn-primary col-6"
                  onClick={() => handleEdit(blog.id)}
                >
                  Edit
                </Button>
                <Button
                  className="btn btn-primary col-6"
                  onClick={() => {
                    const confirm = window.confirm(
                      "Are you sure delete this ? "
                    );
                    if (confirm) {
                      deleteBlog(blog.id);
                    }
                  }}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}

      <div className="">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="mb-3"
                  type="text"
                  value={editedBlog.url}
                  placeholder="Enter Blog Post url"
                  autoFocus
                  onChange={(e) => setEditedBlog({...editedBlog, url: e.target.value})}
                  // onChange={(e) => setEditedBlog({...editedBlog, url: URL.createObjectURL(e.target.files[0])})}
                  />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Enter Blog Title"
                  value={editedBlog.title}
                  onChange={(e) => setEditedBlog({...editedBlog, title: e.target.value})}
                  />
                <Form.Control
                  className="mb-3"
                  type="text"
                  placeholder="Enter Blog Description"
                  value={editedBlog.description}
                  onChange={(e) => setEditedBlog({...editedBlog, description: e.target.value})}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Control
                  as="textarea"
                  value={editedBlog.write}
                  placeholder="Write"
                  rows={3}
                  onChange={(e) => setEditedBlog({...editedBlog, write: e.target.value})}
                  />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default BlogItems;
