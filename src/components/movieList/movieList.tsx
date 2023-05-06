import React from "react";
import MovieItem from "./MovieItem";
import Movie from "../../types/movie";
import DateLine from "./DateLine";

const MovieList = ({
  movies,
  dateLine,
}: {
  movies: Movie[];
  dateLine?: boolean;
}) => {
  let firstMovieAfterTodayIndex = -1;
  const today = new Date();

  movies.some((movie, index) => {
    const releaseDate = new Date(movie.release_date);
    if (releaseDate > today) {
      firstMovieAfterTodayIndex = index;
      return true;
    }
  });

  return (
    <div className="movie-list__container">
      <ul className="movie-list">
        {movies.length > 0 &&
          movies.map((movie: Movie, index) => {
            return (
              <>
                {index === firstMovieAfterTodayIndex && dateLine && (
                  <DateLine />
                )}
                <MovieItem {...movie} key={index} />
              </>
            );
          })}
      </ul>
    </div>
  );
};
export default MovieList;
