import React, { useEffect, useRef, useState } from "react";
import Movie from "../../types/movie";
import DateLine from "../dateLine/DateLine";
import getIndexOfFirstGroupAfterToday from "../../utils/client/getIndexOfFirstGroupAfterToday";
import moviesToGroups from "@/utils/client/moviesToGroups";
import { useCallback } from "react";
import MovieList from "../movieList/MovieList";
import Views from "../../types/views";
import LoadingItem from "../movieItem/LoadingItem";
import cx from "classnames";

const MovieGroups = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const getData = (msg: string) => {
    return JSON.parse(JSON.parse(msg.slice(1))[0]);
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];

  const onMessage = useCallback((string: string) => {
    if (string === "o") return;

    const data = getData(string);

    if (data.server_id) {
      sw.current?.send(
        JSON.stringify([
          '{"msg":"connect","version":"1","support":["1","pre2","pre1"]}',
          `{"msg":"sub","id":"EYakTZrChCoxFyCHv","name":"filmListItems","params":[{"queryName":"currentlyInTheaters"}]}`,
          `{"msg":"sub","id":"2iKHNrMh74h9ZW5a7","name":"filmListItems","params":[{"queryName":"upcomingPremieres"}]}`,
        ])
      );
    }

    if (data.collection == "films" && data.fields && data.fields.title) {
      data.fields.imageSrc = data.fields.image
        ? data.fields.image.split("/").pop()
        : "questionmark.jpg";
      if (
        (data.fields.image && data.fields.image.startsWith("sites/")) ||
        (data.fields.image && data.fields.image.startsWith("filmstills/"))
      ) {
        data.fields.image = `https://www.cineville.nl/${data.fields.image}`;
      }

      setMovies((prev) => [...prev, data.fields]);
    }
  }, []);

  const sw = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://www.cineville.nl/sockjs/447/z2adfc8d/websocket"
    );
    sw.current = socket;
    sw.current.onmessage = (event) => onMessage(event.data);

    return () => {
      sw.current?.close();
    };
  }, []);

  const groups = moviesToGroups(movies);
  const index = getIndexOfFirstGroupAfterToday(groups);
  return (
    <ul className="movie-groups">
      {groups.length > 0 &&
        groups.map((group: Movie[], i) => {
          const date = new Date(group[0].date);
          const fourWeeksAgo = new Date();
          fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);
          const old = group[0].date < fourWeeksAgo.valueOf();

          return (
            <div className={cx("movie-group", old && "old")} key={i}>
              <div className="movie-group__date">
                <div className="movie-group__date-month">{date.getDate()}</div>
                <div className="movie-group__date-day">
                  {monthNames[date.getMonth()]}
                </div>
              </div>
              <MovieList group={group}>{i === index && <DateLine />}</MovieList>
            </div>
          );
        })}
      {groups.length == 0 && (
        <div className="movie-group">
          <div className="movie-group__date">
            <div className="movie-group__date-month--loading" />
            <div className="movie-group__date-day--loading" />
          </div>
          <ul className="movie-list movie-list--loading">
            <li className="movie-item__container--loading">
              <LoadingItem />
              <LoadingItem />

              <LoadingItem />

              <LoadingItem />
            </li>
          </ul>
        </div>
      )}
    </ul>
  );
};

export default MovieGroups;
