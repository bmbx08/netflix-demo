import React from "react";
import "./MovieSlider.style.css";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import MovieCard from "../MovieCard/MovieCard";


const MovieSlider = ({title,movies, responsive}) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={false}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        showDots={true}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
