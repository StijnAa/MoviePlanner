import axios from "axios";

export type endpoint = "now_playing" | "upcoming";

const urlString = (endpoint: endpoint) => {
  const apikey = process.env.API_KEY;
  switch (endpoint) {
    case "now_playing":
      return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&=en-US&page=1&region=NL`;
    case "upcoming":
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&=en-US&page=1&region=NL`;
    default:
      return undefined;
  }
};

const getMovies = async (endpoint: endpoint) => {
  const url = urlString(endpoint);
  console.log(url);
  if (!url) {
    console.log("url is undefined");
    return;
  }
  const call = await axios({
    method: "GET",
    url: url,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  // console.log(call.data.results);

  if (call.status === 200) {
    return call.data.results;
  } else {
    console.log("url is undefined");
    return;
  }
};

export default getMovies;
