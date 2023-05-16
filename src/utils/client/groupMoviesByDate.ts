import Movie from "../../types/movie";

const isEqualToPrev = (movie1: Movie, movie2: Movie) => {
  return movie1.date === movie2.date;
};

export default function groupMoviesByDate(movies: Movie[]) {
  const groupOfMovies = [];
  let group = [];

  for (let i = 0; i <= movies.length - 1; i++) {
    if (i === 0) {
      group.push(movies[i]);
    } else if (isEqualToPrev(movies[i], movies[i - 1])) {
      group.push(movies[i]);
    } else {
      groupOfMovies.push(group);
      group = [];
      group.push(movies[i]);
    }
    if (i === movies.length - 1) {
      groupOfMovies.push(group);
    }
  }
  return groupOfMovies;
}
