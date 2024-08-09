import React from "react";
import {useState} from "react";
import {useMovieVideoQuery} from "../../../../hooks/MovieDetail/useMovieVideo";
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../../common/Loading/ErrorMessage";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceLaughSquint} from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import "./../Trailer/Trailer.style.css";

const Bloopers = ({movie_id}) => {
  const {data: video, isLoading, isError, error} = useMovieVideoQuery(movie_id);
  console.log("video-data", video);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <>
      {video?.some((vid) => vid.type === "Bloopers") ? (
        <Button variant="outline-primary" onClick={handleShow} className="video-button mt-2">
          <FontAwesomeIcon icon={faFaceLaughSquint} className="me-1" />
          Bloopers
        </Button>
      ) : (
        ""
      )}

      {/* <FontAwesomeIcon icon={faVideo} className="me-1"/> */}

      <Modal
        size="lg"
        data-bs-theme="black"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="d-flex modal-header">
          <Modal.Title className="modal-title">
            {video?.some((vid) => vid.type === "Bloopers")
              ? video?.find((video) => video.type === "Bloopers").type
              : "No Video!"}
          </Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>

        <Modal.Body className="ps-4 ms-5">
          {video?.some((vid) => vid.type === "Bloopers") ? (
            <YouTube
              videoId={video?.find((video) => video?.type === "Bloopers").key}
              className="video"
            />
          ) : (
            "No Video!"
          )}
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Bloopers;
