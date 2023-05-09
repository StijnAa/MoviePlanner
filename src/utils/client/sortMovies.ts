import Movie from "../../types/movie";

const isEqualToPrev = (movie1: Movie, movie2: Movie) => {
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

  const duration = movie.duration || 1000;

  if (duration < 60) {
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

const sortMoviesToGroups = (movies: Movie[]) => {
  const moviesA = makeBetterDates(movies);
  const moviesB = moviesA.filter(filterMovies);

  moviesB.sort((a: Movie, b: Movie) => {
    const dateA = a.date;
    const dateB = b.date;

    return dateA - dateB;
  });

  const groupOfMovies = [];
  let group = [];

  for (let i = 0; i < moviesB.length - 1; i++) {
    if (i === 0) {
      group.push(moviesB[i]);
    } else if (isEqualToPrev(moviesB[i], moviesB[i - 1])) {
      group.push(moviesB[i]);
    } else {
      groupOfMovies.push(group);
      group = [];
      group.push(moviesB[i]);
    }
    if (i === moviesB.length - 1) {
      groupOfMovies.push(group);
    }
  }
  // console.log(groupOfMovies);
  return groupOfMovies;
};

export default sortMoviesToGroups;
