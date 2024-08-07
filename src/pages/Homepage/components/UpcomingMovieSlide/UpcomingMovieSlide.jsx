import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import ErrorMessage from "../../../../common/Loading/ErrorMessage";

const UpcomingMovieSlide = () => {
    const {data, isLoading, isError, error} = useUpcomingMoviesQuery();
console.log(data)

    if (isLoading) {
      return <LoadingSpinner/>;
    }
    if (isError) {
      return <ErrorMessage/>;
    }
  
    return (
      <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive}/>
      // <div>
      //   <h3>Upcoming Movies</h3>
      //   <Carousel
      //     infinity={true}
      //     centerMode={true}
      //     itemClass="movie-slider p-1"
      //     containerClass="carousel-container"
      //     responsive={responsive}
      //   >
      //     {data?.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
      //   </Carousel>
      // </div>
    );
}

export default UpcomingMovieSlide