/* eslint-disable @next/next/no-img-element */

import React from "react";
import Movie from "../../types/movie";
import _ from "lodash";

const MovieItem = ({
  image,
  title,
  premiereDate,
  external_id,
  teaser,
}: Movie) => {
  let date: string;
  if (premiereDate) {
    const newDate = new Date(premiereDate.$date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    date = `${day}-${month}-${year}`;
  } else {
    date = "Geen datum bekend";
  }

  // if (
  //   (image && image.startsWith("sites/")) ||
  //   (image && image.startsWith("filmstills/"))
  // ) {
  //   image = `https://www.cineville.nl/${image}`;
  // }
  // console.log(title, " : ", external_id);

  return (
    <div className="movie-item">
      <div className="movie-item__image">
        <img src={false ? image : "/questionmark.jpg"} alt={title} />
      </div>
      <div className="movie-item__text-content">
        <h2 className="movie-item__title">{title}</h2>
        <p className="movie-item__overview">{date}</p>

        <p className="movie-item__overview">
          {teaser &&
            _.truncate(teaser.replace(/<\/?[^>]+(>|$)/g, ""), { length: 120 })}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
