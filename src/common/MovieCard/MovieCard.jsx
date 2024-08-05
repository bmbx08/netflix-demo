import React from "react";
import {Badge} from "react-bootstrap";
import "./MovieCard.style.css"
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({movie}) => {

  const {data:genreData}=useMovieGenreQuery(); //data변수를 genreData로 재정의
  console.log("genre data", genreData); //Moviecard마다 genre api를 호출해도, 실질적으로는 한번만 호출된다(reactquery기능)

  const showGenre = (genreIdList)=>{
    if(!genreData) return [] //장르 데이터가 없으면 아무것도 보여주지 않음
    const genreNameList= genreIdList.map((id)=>{
      const genreObj=genreData.find((genre)=>genre.id === id) //영화 장르id가 genreData의 id들 중 일치하는 게 있다면, 장르 객체(id와 name보유)를 반환
      return genreObj.name;
    })

    return genreNameList
  }


  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <div className="genre-section">
          {showGenre(movie.genre_ids).map((id) => ( //showGenre함수로 장르 id를 문자로 변환
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
        
        <div>
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult?"over18":"under18"}</div>
        </div>

      </div>
    </div>
  );
};

export default MovieCard;
