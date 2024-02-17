
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { UseBlogContext } from "../../Context/BlogContext";
import { Link } from "react-router-dom";

function AddBlogModal() {
  const { addBlog } = UseBlogContext();
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    url: "",
    write: ""
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addnewBlog = () => {
    if (blogData.url !== "" && blogData.description !== "" && blogData.title !== "" && blogData.write !== "") {
      const newBlog = { ...blogData, id: Math.random() };
      addBlog(newBlog);
      setBlogData({ title: "", description: "", url: "", write: "" });
      handleClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value
    });
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setBlogData({
  //     ...blogData,
  //     url: URL.createObjectURL(file)
  //   });
  // };

  return (
    <>
      <Link to="" className="nav-link">
        <h3 variant="primary" className="" onClick={handleShow}>
          +
        </h3>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="mb-3"
                type="text"
                name="url"
                placeholder="Enter Blog Post url"
                autoFocus
                value={blogData.url}
                onChange={handleInputChange}              />

              <Form.Control
                className="mb-3"
                type="text"
                name="title"
                placeholder="Enter Blog Title"
                value={blogData.title}
                onChange={handleInputChange}
              />
              <Form.Control
                className="mb-3"
                type="text"
                name="description"
                placeholder="Enter Blog Description"
                value={blogData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Control
                as="textarea"
                name="write"
                value={blogData.write}
                placeholder="Write"
                rows={3}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addnewBlog}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddBlogModal;
