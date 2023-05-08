import Movie from "../../types/movie";

const filterMovies = (movie: Movie) => {
  const today = new Date();
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(today.getDate() - 18);
  if (!movie.premiereDate) return;

  const premiereDate = new Date(movie.premiereDate.$date);

  if (premiereDate < fourWeeksAgo) {
    return;
  }
  const cities =
    movie.confirmed_screening_in_cities || movie.screening_in_cities || [];
  if (cities.length > 0 && !cities.includes("Amsterdam")) {
    return;
  }

  return movie;
};

const sortMovies = (movies: Movie[]) => {
  const today = new Date();
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(today.getDate() - 28);

  movies = movies.filter(filterMovies);

  movies.sort((a: Movie, b: Movie) => {
    const dateA = a.premiereDate
      ? new Date(a.premiereDate.$date).valueOf()
      : new Date("01 Jan 2100 00:00:00 GMT").valueOf();
    const dateB = b.premiereDate
      ? new Date(b.premiereDate.$date).valueOf()
      : new Date("01 Jan 2100 00:00:00 GMT").valueOf();
    return dateA - dateB;
  });
  console.log(movies);
  return movies;
};

export default sortMovies;

// if (premiereDate < fourWeeksAgo) {
//   return;
// }
// console.log(data.fields);
// if (data.fields.confirmed_screening_in_cities > 0) {
//   return;
// }
