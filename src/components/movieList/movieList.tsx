import React, { useEffect, useRef, useState } from "react";
import MovieItem from "./MovieItem";
import Movie from "../../types/movie";

const MovieList = ({ group }: { group: Movie[] }) => {
  // console.log(group);
  return (
    <ul className="movie-list">
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
