import Movie from "../../types/movie";

export default function sortByDate(a: Movie, b: Movie) {
  const dateA = a.date;
  const dateB = b.date;

  return dateA - dateB;
}
