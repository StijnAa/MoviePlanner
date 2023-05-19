import React, { useContext } from "react";
import Movie from "../../types/movie";
import _ from "lodash";
import Image from "next/image";
import { UserContext } from "@/state/userContext";
import cx from "classnames";
import User from "@/types/user";

function convertToPlain(html: any) {
  // Create a new div element
  var tempDivElement = document.createElement("div");

  // Set the HTML content with the given value
  tempDivElement.innerHTML = html.replace(/&nbsp;/g, " ");

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
  slug,
}: Movie) => {
  const { toggleMovie, user, friends }: any = useContext(UserContext);

  const handleAddToWatchlist = () => {
    if (user.name) {
      toggleMovie("watchlist", external_id);
    } else {
      alert("Je moet ingelogd zijn om films toe te voegen aan je watchlist");
    }
  };
  const handleAddToSkipList = () => {
    if (user.name) {
      toggleMovie("skiplist", external_id);
    } else {
      alert("Je moet ingelogd zijn om films toe te voegen aan je skiplist");
    }
  };

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
        <div className="movie-item__friends">
          <>
            {user.watchlist.includes(external_id) && (
              <div className="movie-item__friend-image">
                <Image
                  src={user.photoUrl}
                  alt="user profile picture"
                  width={200}
                  height={200}
                />
              </div>
            )}
          </>
          <>
            {friends.map((friend: User, i: number) => {
              if (friend.watchlist.includes(external_id)) {
                return (
                  <div className="movie-item__friend-image" key={i}>
                    <Image
                      src={friend.photoUrl}
                      alt="user profile picture"
                      width={200}
                      height={200}
                    />
                  </div>
                );
              }
            })}
          </>
        </div>
        <div className="movie-item__filter-buttons">
          <button
            className={cx(
              "movie-item__filter-button movie-item__filter-button--plus",
              user.watchlist.includes(external_id) && "active"
            )}
            disabled={!user.name}
            onClick={handleAddToWatchlist}
          >
            +
          </button>
          <button
            className={cx(
              "movie-item__filter-button movie-item__filter-button--minus",
              user.skiplist.includes(external_id) && "active"
            )}
            disabled={!user.name}
            onClick={handleAddToSkipList}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
