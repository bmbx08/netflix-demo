import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./MovieSlider.style.css";
import MovieCard from "../MovieCard/MovieCard";
import { Carousel } from "bootstrap";



const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinity={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies?.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
