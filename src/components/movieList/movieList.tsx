import React, { ReactElement } from "react";
import MovieItem from "../movieItem/MovieItem";
import Movie from "../../types/movie";
import Views from "@/types/views";
import FriendsList from "../login/FriendsList";

const MovieList = ({
  group,
  children,
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
