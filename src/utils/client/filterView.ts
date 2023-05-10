import Movie from "@/types/movie";
import Views from "@/types/views";
import user from "public/user.json";

export default function filterView(groups: Movie[][], view: Views) {
  if (view === "all") {
    return groups;
  }
  let newGroups: Movie[][] = [];
  groups.forEach((movies, i) => {
    if (view === "my-list") {
      const newList = movies.filter(
        (movie) => !user.skiplist.includes(movie.external_id)
      );
      newList.length > 0 && newGroups.push(newList);
    } else if (view === "removed") {
      const newList = movies.filter((movie) =>
        user.skiplist.includes(movie.external_id)
      );

      newList.length > 0 && newGroups.push(newList);
    }
  });

  return newGroups;
}
