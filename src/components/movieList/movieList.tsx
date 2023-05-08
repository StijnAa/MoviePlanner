import React, { useEffect, useRef, useState } from "react";
import MovieItem from "./MovieItem";
import Movie from "../../types/movie";
import DateLine from "./DateLine";
import getFirstMovieAfterTodayIndex from "@/utils/client/getFirstMovieAfterTodayIndex";
import sortMovies from "@/utils/client/sortMovies";
import { useCallback } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);

  const getData = (msg: string) => {
    return JSON.parse(JSON.parse(msg.slice(1))[0]);
  };

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
      if (data.fields.premiereDate) {
        const premiereDate = new Date(data.fields.premiereDate.$date);
        const today = new Date();
        const fourWeeksAgo = new Date();
        fourWeeksAgo.setDate(today.getDate() - 28);
        if (premiereDate > fourWeeksAgo) {
          setMovies((prev) => [...prev, data.fields]);
        }
      }
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

  const sortedMovies = sortMovies(movies);
  // const sortedMovies = movies;

  return (
    <div className="movie-list__container">
      <ul className="movie-list">
        {sortedMovies.length > 0 &&
          sortedMovies.map((movie: Movie, i) => {
            return (
              <li key={i} className="movie-item__container">
                {i === getFirstMovieAfterTodayIndex(sortedMovies) && (
                  <DateLine />
                )}
                <MovieItem {...movie} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
