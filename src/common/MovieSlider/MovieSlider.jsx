import React from "react";
import "./MovieSlider.style.css";
import { Carousel } from "bootstrap";
import "react-multi-carousel/lib/styles.css";

import MovieCard from "../MovieCard/MovieCard";


const MovieSlider = (props) => {
  let {title,movies, responsive} = props;

  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinity={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={props?.responsive}
      >
        {movies?.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
