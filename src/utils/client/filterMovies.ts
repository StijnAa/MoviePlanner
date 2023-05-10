import Movie from "@/types/movie";

export default function filterMovies(movie: Movie) {
  const today = new Date();
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(today.getDate() - 18);

  // filter by date
  const premiereDate = movie.date;
  if (premiereDate < fourWeeksAgo.valueOf()) {
    return;
  }

  // filte by city
  const cities =
    movie.confirmed_screening_in_cities || movie.screening_in_cities || [];
  if (cities.length > 0 && !cities.includes("Amsterdam")) {
    return;
  }

  // filter by duration
  const duration = movie.duration || 1000;
  if (duration < 60) {
    return;
  }

  return movie;
}
