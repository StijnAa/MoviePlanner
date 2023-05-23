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

const moviesToGroups = (movies: Movie[], filters: any, user: any) => {
  const filteredMovies = movies.filter((movie) => {
    if (filters["skip"] == false && user.skiplist.includes(movie.external_id)) {
      return null;
    }
    if (
      filters["watch"] == false &&
      user.watchlist.includes(movie.external_id)
    ) {
      return null;
    }
    if (
      filters["rest"] == false &&
      !user.watchlist.includes(movie.external_id) &&
      !user.skiplist.includes(movie.external_id)
    ) {
      return null;
    }
    return movie;
  });
  filteredMovies.sort(sortByDate);
  const groups = groupMoviesByDate(filteredMovies);

  return groups;
};

export default moviesToGroups;
