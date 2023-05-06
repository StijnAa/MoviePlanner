import React from "react";
import { useEffect, useState } from "react";
import getMovies from "../../utils/getMovies";
import MovieItem from "./movieItem";
import Movie from "../../types/movie";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  useEffect(() => {
    (async () => {
      const callresults = await getMovies(setLoading);
      console.log(callresults);
      setMovies(callresults);
    })();
  }, []);
  return (
    <div className="movie-list__container">
      {loading ? (
        <code>loading...</code>
      ) : (
        <ul className="movie-list">
          {movies.length > 0 &&
            movies.map((movie: Movie, index) => (
              <MovieItem {...movie} key={index} />
            ))}
        </ul>
      )}
    </div>
  );
};
export default MovieList;
