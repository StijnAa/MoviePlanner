import MovieGroups from "@/components/movieGroups/MovieGroups";
import Navigation from "../components/nav/Nav";
import FilterBar from "@/components/nav/filterBar";

export default function Index() {
  return (
    <>
      <main className="container">
        <Navigation page="movies" />
        <FilterBar />
        <MovieGroups />
      </main>
    </>
  );
}
