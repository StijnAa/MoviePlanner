import React from "react";
import MovieItem from "./movieItem";
import Movie from "../../types/movie";

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="movie-list__container">
      <ul className="movie-list">
        {movies.length > 0 &&
          movies.map((movie: Movie, index) => (
            <MovieItem {...movie} key={index} />
          ))}
      </ul>
    </div>
  );
};
export default MovieList;
