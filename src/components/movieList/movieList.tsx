import React, {
  ReactComponentElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import MovieItem from "../movieItem/MovieItem";
import Movie from "../../types/movie";

const MovieList = ({
  group,
  children,
}: {
  group: Movie[];
  children: ReactElement | false;
}) => {
  return (
    <ul className="movie-list">
      {children}
      {group.length > 0 &&
        group.map((movie: Movie, i) => {
          return (
            <li key={i} className="movie-item__container">
              <MovieItem {...movie} />
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
