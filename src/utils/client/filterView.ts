import Movie from "@/types/movie";
import Views from "@/types/views";
import user from "public/user.json";
const oldMovie = (movie: Movie) => {
  movie.external_id == 78924 && console.log("skot");
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
  movie.external_id == 78924 && console.log("skot");
  if (view === "old") {
    return oldMovie(movie);
  } else {
    if (oldMovie(movie)) {
      return false;
    }
    if (view === "all") {
      return true;
    } else if (view === "my-list") {
      return !user.skiplist.includes(movie.external_id);
    } else if (view === "removed") {
      return user.skiplist.includes(movie.external_id);
    }
  }
}
