import Movie from "../../types/movie";

const getFirstMovieAfterTodayIndex = (movies: Movie[]) => {
  let firstMovieAfterTodayIndex = -1;
  const today = new Date();
  movies.some((movie, index) => {
    let releaseDate = new Date("01 Jan 2100 00:00:00 GMT");

    if (movie.premiereDate) {
      releaseDate = new Date(movie.premiereDate.$date);
    } else if (movie.premiereDateText) {
      releaseDate = new Date(movie.premiereDateText);
    }

    if (releaseDate > today) {
      firstMovieAfterTodayIndex = index;
      return true;
    }
  });
  return firstMovieAfterTodayIndex;
};
export default getFirstMovieAfterTodayIndex;
