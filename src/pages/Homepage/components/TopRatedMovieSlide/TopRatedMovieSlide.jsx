import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import LoadingSpinner from '../../../../common/Loading/LoadingSpinner';
import ErrorMessage from '../../../../common/Loading/ErrorMessage';

const TopRatedMovieSlide = () => {
    const {data,isLoading,isError,error} = useTopRatedMoviesQuery();

    if(isLoading){
        return <LoadingSpinner/>;
    }
    if(isError){
        return <ErrorMessage error={error}/>;
    }
  return (
    <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive}/>
  )
}

export default TopRatedMovieSlide