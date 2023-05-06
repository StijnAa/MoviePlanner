import Movie from "../types/movie";

const getMovies = async (setLoading: (boolean: boolean) => void) => {
  setLoading(true);
  const res = await fetch("/api/getMovies", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  setLoading(false);
  if (res.status === 200) {
    const movies = await res.json();

    movies.sort((a: any, b: any) => {
      const dateA = new Date(a.release_date).valueOf();
      const dateB = new Date(b.release_date).valueOf();
      return dateA - dateB;
    });

    return movies;
  } else {
    return { status: 500 };
  }
};

export default getMovies;
