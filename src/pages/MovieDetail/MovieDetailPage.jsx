import React, {useState} from "react";
import {useParams} from "react-router-dom";
import "./MovieDetailPage.style.css";
import ReviewSection from "./ReviewSection/ReviewSection";
import RecommendSection from "./RecommendSection/RecommendSection";
import DetailSection from "./DetailSection/DetailSection";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import DetailBanner from "./DetailBanner/DetailBanner";

const MovieDetailPage = () => {
  let {id} = useParams();
  const [radioValue, setRadioValue] = useState("1");
  const [componentState, setComponentState] = useState("radio-0");

  const radios = [
    {name: "Reviews", value: "1"},
    {name: "Similar Movies", value: "2"},
  ];

  const toggleComponent = (e) => {
    setRadioValue(e.currentTarget.value);
    setComponentState(e.currentTarget.id);
    console.log(e);
  };
  return (
    <div className="detail-page">
      <DetailBanner movie_id={id}/>
      <DetailSection movie_id={id} />
      <div className="section-radio d-flex justify-content-center">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => toggleComponent(e)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <ReviewSection movie_id={id} componentState={componentState}/>
      <RecommendSection movie_id={id} componentState={componentState}/>
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
