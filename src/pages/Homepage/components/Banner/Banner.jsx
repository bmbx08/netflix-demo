import React from "react";
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import "./Banner.style.css"
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../../common/Loading/ErrorMessage";

const Banner = () => {
  const {data, isLoading, isError, error} = usePopularMoviesQuery();
  console.log("data", data);

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
          `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
          ")"
      }}
      className="banner"
    >
        <div className="text-white banner-text-area">
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  );
};

export default Banner;
