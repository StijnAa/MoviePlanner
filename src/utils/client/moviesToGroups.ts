import Movie from "../../types/movie";
import filterMovies from "./filterMovies";
import fixDates from "./fixDates";
import groupMoviesByDate from "./groupMoviesByDate";
import sortByDate from "./sortByDate";

const moviesToGroups = (movies: Movie[]) => {
  movies = fixDates(movies);
  movies = movies.filter(filterMovies);
  movies.sort(sortByDate);
  const groups = groupMoviesByDate(movies);

  return groups;
};

export default moviesToGroups;
