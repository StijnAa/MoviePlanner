import Head from "next/head";
import MovieList from "../components/movieList/movieList";

export default function index() {
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗺</text></svg>"
        />
      </Head>
      <div className="container">
        <MovieList />
      </div>
    </>
  );
}
