import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../../common/Loading/ErrorMessage";
import "./Banner.style.css"


const Banner = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery();
  console.log("data", data);
  let randomNumber=Math.floor(Math.random()*5)

  if (isLoading) {
    return <LoadingSpinner version="version1"/>;
  }
  if (isError) {
    return <ErrorMessage error={error}/>;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[randomNumber].poster_path}` +
          ")"
      }}
      className="banner"
    >
      {}
        <div className="text-white banner-text-area">
            <h1>{data?.results[randomNumber].title}</h1>
            <p>{data?.results[randomNumber].overview}</p>
        </div>
    </div>
  );
};

export default Banner;
