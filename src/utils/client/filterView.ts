import Movie from "@/types/movie";
import Views from "@/types/views";
import user from "public/user.json";

export default function filterView(movie: Movie, view: Views) {
  if (view === "all") {
    return true;
  } else if (view === "my-list") {
    return !user.skiplist.includes(movie.external_id);
  } else if (view === "removed") {
    return user.skiplist.includes(movie.external_id);
  }
}
