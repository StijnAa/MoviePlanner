import React from "react";
import Movie from "../../types/movie";
import _ from "lodash";
import cx from "classnames";
import Image from "next/image";
import { Avatar, AvatarBadge, AvatarGroup, Stack } from "@chakra-ui/react";

function convertToPlain(html: any) {
  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html;
  console.log(html);
  console.log(tempDivElement.textContent?.replaceAll("/", " / "));

  // Retrieve the text property of the element
  return (
    tempDivElement.textContent?.replaceAll("/", " / ") ||
    tempDivElement.innerText.replaceAll("/", " / ") ||
    ""
  );
}

const MovieItem = ({
  image,
  title,
  date,
  external_id,
  teaser,
  position,
  slug,
  imageSrc,
}: Movie) => {
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth() + 1;
  const year = new Date(date).getFullYear();
  const dateString = `${day}-${month}-${year}`;

  return (
    <div className="movie-item">
      <a
        href={"https://www.cineville.nl/films/" + slug}
        target="_blank"
        rel="noreferrer"
      >
        <div className="movie-item__image">
          <Image src={image} alt={title} width={500} height={500} />
        </div>
        <div className="movie-item__text-content">
          <h2 className="movie-item__title">{title}</h2>

          <p className="movie-item__overview">
            {teaser && convertToPlain(teaser)}
          </p>
        </div>
      </a>
      <div className="movie-item__social-data">
        <div className="movie-item__friends"></div>
        <div className="movie-item__filter-buttons">
          <button className="movie-item__filter-button movie-item__filter-button--plus">
            +
          </button>
          <button className="movie-item__filter-button movie-item__filter-button--minus">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
