import Movie from "../../types/movie";

const lastMovieOnThisDate = (movie1: Movie, movie2: Movie) => {
  return movie1.date === movie2.date;
};

const filterMovies = (movie: Movie) => {
  const today = new Date();
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(today.getDate() - 18);

  const premiereDate = movie.date;

  if (premiereDate < fourWeeksAgo.valueOf()) {
    return;
  }

  const cities =
    movie.confirmed_screening_in_cities || movie.screening_in_cities || [];

  if (cities.length > 0 && !cities.includes("Amsterdam")) {
    return;
  }

  return movie;
};

const makeBetterDates = (movies: Movie[]) => {
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
};

const sortMovies = (movies: Movie[]) => {
  const moviesA = makeBetterDates(movies);
  const moviesB = moviesA.filter(filterMovies);

  moviesB.sort((a: Movie, b: Movie) => {
    const dateA = a.date;
    const dateB = b.date;

    return dateA - dateB;
  });

  for (let i = 0; i < moviesB.length - 1; i++) {
    if (i === 0) {
      moviesB[i].position = "start";
    } else if (lastMovieOnThisDate(moviesB[i], moviesB[i - 1])) {
      moviesB[i].position = "mid";
    } else {
      if (moviesB[i - 1].position == "mid") {
        moviesB[i - 1].position = "end";
      }
      moviesB[i].position = "start";
    }
  }

  return moviesB;
};

export default sortMovies;
