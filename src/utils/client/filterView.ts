import Movie from "@/types/movie";
import Views from "@/types/views";

const oldMovie = (movie: Movie) => {
  const today = new Date();
  const fourWeeksAgo = new Date();
  fourWeeksAgo.setDate(today.getDate() - 18);

  const premiereDate = movie.date;

  if (premiereDate < fourWeeksAgo.valueOf()) {
    return true;
  } else {
    return false;
  }
};

export default function filterView(movie: Movie, view: Views) {
  return movie;
}
