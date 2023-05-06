import axios from "axios";

export type endpoint = "now_playing" | "upcoming";

const urlString = (endpoint: endpoint) => {
  const apikey = process.env.API_KEY;
  const date = new Date();

  // create a date for today
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${year}-${month}-${day}`;

  // create a date 6 months from now
  const sixMonths = new Date();
  sixMonths.setMonth(sixMonths.getMonth() + 6);
  const sixMonthsYear = sixMonths.getFullYear();
  const sixMonthsMonth = sixMonths.getMonth() + 1;
  const sixMonthsDay = sixMonths.getDate();
  const sixMonthsDate = `${sixMonthsYear}-${sixMonthsMonth}-${sixMonthsDay}`;

  switch (endpoint) {
    case "now_playing":
      return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=1&region=NL`;
    case "upcoming":
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&page=1&region=NL&primary_release_date.gte=${today}&primary_release_date.lte=${sixMonthsDate}`;
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
