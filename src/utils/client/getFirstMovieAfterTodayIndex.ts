import Movie from "../../types/movie";

const getFirstMovieAfterTodayIndex = (movies: Movie[]) => {
  let firstMovieAfterTodayIndex = -1;
  const today = new Date();
  movies.some((movie, index) => {
    if (movie.date > today.valueOf()) {
      firstMovieAfterTodayIndex = index;
      return true;
    }
  });
  return firstMovieAfterTodayIndex;
};
export default getFirstMovieAfterTodayIndex;
