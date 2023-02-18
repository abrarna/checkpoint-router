import React, { Fragment } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesData, title, rating }) => {
  return (
    <Fragment>
      {moviesData
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
            movie.rating === rating
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </Fragment>
  );
};

export default MovieList;
