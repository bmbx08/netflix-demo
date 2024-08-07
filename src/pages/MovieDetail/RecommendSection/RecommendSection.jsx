import React from "react";
import {useMovieRecommendsQuery} from "../../../hooks/MovieDetail/useMovieRecommends";
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../constants/responsive";
import LoadingSpinner from "../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../common/Loading/ErrorMessage";

const RecommendSection = ({movie_id}) => {
  const {data, isLoading, isError, error} = useMovieRecommendsQuery(movie_id);
  console.log("recommend data", data);

  if (isLoading) {
    return <LoadingSpinner/>;
  }
  if (isError) {
    return <ErrorMessage/>;
  }
  return <div>
    <MovieSlider title="Recommendations" movies={data.results} responsive={responsive}/>
  </div>;
};

export default RecommendSection;
