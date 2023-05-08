/* eslint-disable @next/next/no-img-element */

import React from "react";
import Movie from "../../types/movie";
import _ from "lodash";
import cx from "classnames";

function convertToPlain(html) {
  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;

  // Retrieve the text property of the element
  return tempDivElement.textContent || tempDivElement.innerText || "";
}

const MovieItem = ({
  image,
  title,
  date,
  external_id,
  teaser,
  position,
}: Movie) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  const dateString = `${day}-${month}-${year}`;

  if (
    (image && image.startsWith("sites/")) ||
    (image && image.startsWith("filmstills/"))
  ) {
    image = `https://www.cineville.nl/${image}`;
  }
  console.log(title, " : ", external_id);

  return (
    <div className="movie-item">
      <div className={cx("vertical-line", "vertical-line--" + position)} />
      <div className="movie-item__image">
        <img src={image ? image : "/questionmark.jpg"} alt={title} />
      </div>
      <div className="movie-item__text-content">
        <h2 className="movie-item__title">{title}</h2>

        <p className="movie-item__overview">
          {teaser &&
            _.truncate(convertToPlain(teaser), {
              length: 80,
            })}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
