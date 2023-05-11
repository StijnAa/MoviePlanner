import Movie from "@/types/movie";

export default function filterMovies(movie: Movie) {
  // filte by city
  const cities =
    movie.confirmed_screening_in_cities || movie.screening_in_cities || [];
  if (cities.length > 0 && !cities.includes("Amsterdam")) {
    console.log(movie.title);
    return;
  }

  // filter by duration
  const duration = movie.duration || 1000;
  if (duration && duration < 60) {
    console.log(movie.title);
    return;
  }

  return movie;
}
