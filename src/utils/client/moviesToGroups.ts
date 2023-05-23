import Movie from "../../types/movie";
import filterMovies from "./filterMovies";
import fixDates from "./fixDates";
import groupMoviesByDate from "./groupMoviesByDate";
import sortByDate from "./sortByDate";

export const preFilter = (movie: Movie) => {
  const a = fixDates(movie);
  const b = filterMovies(a);
  return b;
};

const moviesToGroups = (movies: Movie[]) => {
  movies.sort(sortByDate);
  const groups = groupMoviesByDate(movies);

  return groups;
};

export default moviesToGroups;
