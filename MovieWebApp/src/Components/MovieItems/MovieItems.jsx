import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function MovieItems(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (event) => {
    const id = event.currentTarget.id;
    setId(id);
    setShow(true);
  };


  const fetchData = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=c9466890`
    );
    const data = await response.data;
    setData({
      poster: data.Poster,
      title: data.Title,
      actors: data.Actors,
      director: data.Director,
      language: data.Language,
      plot: data.Plot,
      released: data.Released,
      writer: data.Writer,
      rating: data.imdbRating,
      boxoffice: data.BoxOffice,
    });
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={data.poster}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{data.title}</h5>
                  <p class="card-text">{data.plot}</p>
                  <div class="d-flex flex-column">
                    <span>Actors: {data.actors}</span>
                    <span>Director: {data.director}</span>
                    <span>Language: {data.language}</span>
                    <span>Released: {data.released}</span>
                    <span>Writer: {data.writer}</span>
                    <span>Rating: {data.rating}</span>
                    <span>BoxOffice Collection: {data.boxoffice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {props.data.map((movie) => (
        <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 mb-2">
          <div class="card p-2" key={movie.id}>
            <img
              src={movie.poster}
              className="card-img"
              style={{ height: "300px" }}
            />
            <h5 class="card-title text-center mt-2">{movie.title}</h5>

            <Button variant="primary" id={movie.id} onClick={handleShow}>
              See More
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieItems;
