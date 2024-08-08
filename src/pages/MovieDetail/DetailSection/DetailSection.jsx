import React from "react";
import {useMovieDetailQuery} from "../../../hooks/MovieDetail/useMovieDetail";
import {Badge} from "react-bootstrap";
import "./DetailSection.style.css"
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import IMDB from "./../../../common/images/IMDB.png";
import ratedAll from "./../../../common/images/ratedAll.svg";
import rated18 from "./../../../common/images/rated18.png";
import popularity from "./../../../common/images/popularity.png";

const DetailSection = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieDetailQuery(movie_id);
  console.log("detail data", data);

  if (isLoading) {
    return <LoadingSpinner version="version2" />;
  }
  if (isError) {
    return <ErrorMessage error={error}/>;
  }
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}` +
            ")",
        }}
        className="movie-poster"
      ></div>
      <h3>{data?.title}</h3>
      <h6>{data.tagline}</h6>
      <h6>
        <img src={popularity} width="18px" className="push-up me-1" />
        {data.vote_average}
      </h6>
      <h6>
        <img src={IMDB} width="20px" className="push-up me-1" />
        {data.popularity}
      </h6>
      <h6>revenue: {data.revenue}</h6>
      <h6>
        {data?.adult ? (
          <img src={rated18} width="20px" />
        ) : (
          <img src={ratedAll} width="20px" />
        )}
      </h6>
      <div className="detail-genre-section">
        {data.genres.map(
          (
            genre,
            index //showGenre함수로 장르 id를 문자로 변환
          ) => (
            <Badge bg="danger" key={index}>
              {genre.name}
            </Badge>
          )
        )}
      </div>
      <h3>{data.release_date}</h3>
      <p>{data.overview}</p>
    </div>
  );
};

export default DetailSection;
