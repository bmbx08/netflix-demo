import React from "react";
import {useParams} from "react-router-dom";
import {useMovieDetailQuery} from "../../hooks/MovieDetail/useMovieDetail";
import {Badge} from "react-bootstrap";
import "./MovieDetailPage.style.css";
import ReviewSection from "./ReviewSection/ReviewSection";
import RecommendSection from "./RecommendSection/RecommendSection";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../common/Loading/ErrorMessage";

const MovieDetailPage = () => {
  let {id} = useParams();
  const {data, isLoading, isError, error} = useMovieDetailQuery({id});
  console.log(data);

  if (isLoading) {
    return <LoadingSpinner version="version2"/>;
  }
  if (isError) {
    return <ErrorMessage/>;
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
      <h6>vote average:{data.vote_average}</h6>
      <h6>popularity:{data.popularity}</h6>
      <h6>revenue: {data.revenue}</h6>
      <h6>{data?.adult == true ? "Adult Only!!" : "For All Audiences"}</h6>
      <div className="genre-section">
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
      <ReviewSection movie_id={id}/>
      <RecommendSection movie_id={id}/>
    </div>
  );
};

// const {data: genreData} = useMovieGenreQuery(); //data변수를 genreData로 재정의

// const showGenre = (genreIdList) => {
//   if (!genreData) return []; //장르 데이터가 없으면 아무것도 보여주지 않음
//   const genreNameList = genreIdList.map((id) => {
//     const genreObj = genreData.find((genre) => genre.id === id); //영화 장르id가 genreData의 id들 중 일치하는 게 있다면, 장르 객체(id와 name보유)를 반환
//     return genreObj.name;
//   });

//   return genreNameList;
// }

/* <div
  style={{
    backgroundImage:
      "url(" +
      `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
      ")",
  }}
  className="movie-card"
  onClick={goToDetailPage}
>
  <div className="overlay">
    <h1>{movie.title}</h1>
    <div className="genre-section">
      {showGenre(movie.genre_ids).map(
        (
          id,
          index //showGenre함수로 장르 id를 문자로 변환
        ) => (
          <Badge bg="danger" key={index}>
            {id}
          </Badge>
        )
      )}
    </div>

    <div>
      <div>{movie.vote_average}</div>
      <div>{movie.popularity}</div>
      <div>{movie.adult ? "over18" : "under18"}</div>
    </div>
  </div>
</div> */

export default MovieDetailPage;
