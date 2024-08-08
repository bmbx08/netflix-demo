import React from "react";
import {usePopularMoviesQuery} from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../../common/Loading/ErrorMessage";




const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();


    
    if (isLoading) {
      return <LoadingSpinner/>
    }
    if (isError) {
      return <ErrorMessage error={error}/>;
    }
  
    return (
      <MovieSlider title="Popular Movies" movies={data.results} responsive={responsive}/>
    );
  };

export default PopularMovieSlide