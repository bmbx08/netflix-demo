import React from "react";
import {Badge} from "react-bootstrap";
import "./MovieCard.style.css";
import {useMovieGenreQuery} from "../../hooks/useMovieGenre";
import {useNavigate} from "react-router-dom";
import IMDB from "./../images/IMDB.png";
import ratedAll from "./../images/ratedAll.svg";
import rated18 from "./../images/rated18.png";

const MovieCard = ({movie}) => {
  const {data: genreData} = useMovieGenreQuery(); //data변수를 genreData로 재정의
  // console.log("genre data", genreData); //Moviecard마다 genre api를 호출해도, 실질적으로는 한번만 호출된다(reactquery기능)
  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return []; //장르 데이터가 없으면 아무것도 보여주지 않음
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id); //영화 장르id가 genreData의 id들 중 일치하는 게 있다면, 장르 객체(id와 name보유)를 반환
      return genreObj.name;
    });

    return genreNameList;
  };

  const goToDetailPage = () => {
    console.log(movie.id);
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
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
        <div className="movie-title mb-4">{movie.title}</div>
        <div className="genre-section mb-2">
          {showGenre(movie.genre_ids).map(
            (
              id,
              index //showGenre함수로 장르 id를 문자로 변환
            ) => (
              <Badge className="me-1" bg="danger" key={index}>
                {id}
              </Badge>
            )
          )}
        </div>
        <div>
          <span>
            <img src={IMDB} width="20px" className="push-up me-1" />
            {movie.popularity}
          </span>
          <span className="age-restriction">
            {movie.adult ? (
              <img src={rated18} width="20px" />
            ) : (
              <img src={ratedAll} width="20px" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
