/* eslint-disable @next/next/no-img-element */

import React from "react";
import Movie from "../../types/movie";
import _ from "lodash";

type movieItemProps = Movie & {
  key: number;
};

const MovieItem = ({
  title,
  poster_path,
  overview,
  release_date,
  key,
}: movieItemProps) => {
  return (
    <li className="movie-item" key={key}>
      <div className="movie-item__image">
        <img
          src={"https://image.tmdb.org/t/p/w200/" + poster_path}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="movie-item__text-content">
        <h2 className="movie-item__title">{title}</h2>
        <p className="movie-item__overview">{release_date}</p>

        <p className="movie-item__overview">
          {_.truncate(overview, { length: 120 })}
        </p>
      </div>
    </li>
  );
};

export default MovieItem;
