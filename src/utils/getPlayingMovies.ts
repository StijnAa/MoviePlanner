import Movie from "../types/movie";
import getMovies from "./getMovies";

const getPlayingMovies = async () => {
  const movies = await getMovies("now_playing");
  if (movies) {
    movies.sort((a: Movie, b: Movie) => {
      const dateA = new Date(a.release_date).valueOf();
      const dateB = new Date(b.release_date).valueOf();
      return dateA - dateB;
    });

    return movies;
  } else {
    return { status: 500 };
  }
};

export default getPlayingMovies;
