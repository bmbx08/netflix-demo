import React from "react";
import {useMovieDetailQuery} from "../../../hooks/MovieDetail/useMovieDetail";
import {Badge, Col, Row} from "react-bootstrap";
import "./DetailSection.style.css";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import IMDB from "./../../../common/images/IMDB.png";
import ratedAll from "./../../../common/images/ratedAll.svg";
import rated18 from "./../../../common/images/rated18.png";
import popularity from "./../../../common/images/popularity.png";
import Trailer from "./Trailer/Trailer";
import Bloopers from "./Trailer3/Bloopers";
import BehindScenes from "./Trailer2/BehindScenes";

const DetailSection = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieDetailQuery(movie_id);
  console.log("detail data", data);

  if (isLoading) {
    return <LoadingSpinner version="version2" />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div>
      <Row>
        <Col lg={3} sm={12} className="d-flex flex-column align-items-center">
          <div className="text-center">
            <div
              style={{
                backgroundImage:
                  "url(" +
                  `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}` +
                  ")",
              }}
              className="movie-poster"
            ></div>
          </div>
          <div className="movie-icon-section">
            <Trailer movie_id={movie_id} />
            <BehindScenes movie_id={movie_id} />
            <Bloopers movie_id={movie_id} />
          </div>
        </Col>
        <Col lg={9} sm={12} className="ps-5 pe-5">
          <div className="detail-genre-section">
            {data.genres.map(
              (
                genre,
                index //showGenre함수로 장르 id를 문자로 변환
              ) => (
                <Badge bg="danger" className="detail-genre" key={index}>
                  {genre.name}
                </Badge>
              )
            )}
          </div>
          <div className="detail-title-section">
            <h1 className="detail-title pb-2">{data?.title}</h1>
            <h5 className="detail-tagline pb-4">{data.tagline}</h5>
          </div>
          <div className="detail-score-section">
            <span className="me-2">
              <img src={IMDB} width="20px" className="push-up me-1" />
              {data.popularity}
            </span>
            <span className="me-2">
              <img src={popularity} width="18px" className="push-up me-1" />
              {data.vote_average}
            </span>
            <span>
              {data?.adult ? (
                <img src={rated18} width="20px" />
              ) : (
                <img src={ratedAll} width="20px" />
              )}
            </span>
          </div>
          <div className="detail-description-section pt-3 pb-3">
            <p>{data.overview}</p>
          </div>
          <div>
            <div className="detail-extra-section">
              <div>
                <Badge bg="danger" className="detail-extra-button">
                  Budget
                </Badge>
                <span className="detail-extra extra-budget">{data.budget}</span>
              </div>
              <div>
                <Badge bg="danger" className="detail-extra-button">
                  Revenue
                </Badge>
                <span className="detail-extra extra-budget">
                  {data.revenue}
                </span>
              </div>
              <div>
                <Badge bg="danger" className="detail-extra-button">
                  Release Date
                </Badge>
                <span className="detail-extra">{data.release_date}</span>
              </div>
              <div>
                <Badge bg="danger" className="detail-extra-button">
                  Runtime
                </Badge>
                <span className="extra-runtime">{data.runtime}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailSection;
