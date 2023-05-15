/* eslint-disable @next/next/no-img-element */

import React from "react";
import Movie from "../../types/movie";
import _ from "lodash";
import cx from "classnames";
import Image from "next/image";

const LoadingItem = () => {
  return (
    <div className="movie-item--loading">
      <div className="movie-item__image--loading"></div>
      <div className="movie-item__text-content--loading">
        <div className="movie-item__title--loading" />
        <div className="movie-item__overview--loading" />
      </div>
    </div>
  );
};

export default LoadingItem;
