import Movie from "../../types/movie";

export default function fixDates(movies: Movie[]) {
  movies.forEach((movie) => {
    if (movie.premiereDate) {
      movie.date = new Date(
        new Date(movie.premiereDate.$date).toISOString().split("T")[0]
      ).valueOf();
    } else {
      movie.date = new Date("01 Jan 1900 00:00:00 GMT").valueOf();
    }
  });

  return movies;
}
