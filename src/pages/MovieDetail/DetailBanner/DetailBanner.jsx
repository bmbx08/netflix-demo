import React from "react";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";
import { useMovieDetailQuery } from "../../../hooks/MovieDetail/useMovieDetail";
import "./DetailBanner.style.css"



const DetailBanner = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieDetailQuery(movie_id);
  console.log("detail data", data);

  if (isLoading) {
    return <LoadingSpinner version="version2" />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w533_and_h300_bestv2${data?.backdrop_path}` +
          ")"
      }}
      className="detail-banner"
    >
    </div>
  );
};

export default DetailBanner;
