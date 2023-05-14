import React, { ReactElement } from "react";
import MovieItem from "../movieItem/MovieItem";
import Movie from "../../types/movie";
import filterView from "@/utils/client/filterView";
import Views from "@/types/views";

const MovieList = ({
  group,
  children,
  view,
}: {
  view: Views;
  group: Movie[];
  children: ReactElement | false;
}) => {
  return (
    <ul className="movie-list">
      {children}
      {group.length > 0 &&
        group.map((movie: Movie, i) => {
          if (!filterView(movie, view)) return null;
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
