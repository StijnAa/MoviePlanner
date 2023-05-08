import Movie from "../../types/movie";

const sortMovies = (movies: Movie[]) => {
  movies.sort((a: Movie, b: Movie) => {
    const dateA = a.premiereDate
      ? new Date(a.premiereDate.$date).valueOf()
      : new Date("01 Jan 2100 00:00:00 GMT").valueOf();
    const dateB = b.premiereDate
      ? new Date(b.premiereDate.$date).valueOf()
      : new Date("01 Jan 2100 00:00:00 GMT").valueOf();
    return dateA - dateB;
  });
  return movies;
};

export default sortMovies;
