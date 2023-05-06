import axios from "axios";

const api = async (req: any, res: any) => {
  const apikey = process.env.API_KEY;
  const call = await axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  // console.log(call.data.results);

  if (call.status === 200) {
    res.status(200).json(call.data.results);
  } else {
    res.status(500).json("error");
  }
};

export default api;
