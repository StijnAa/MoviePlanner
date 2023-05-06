import Movie from "@/types/movie";
import getUpcomingMovies from "@/utils/getUpcommingMovies";
import getPlayingMovies from "@/utils/getPlayingMovies";

import Head from "next/head";
import { useState } from "react";
import MovieList from "@/components/movieList/MovieList";

export default function index({
  upcommingMovies,
  nowPlayingMovies,
}: {
  nowPlayingMovies: Movie[];
  upcommingMovies: Movie[];
}) {
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
        {/* <MovieList movies={nowPlayingMovies} dateLine={true} /> */}
        <MovieList movies={upcommingMovies} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const upcommingMovies = await getUpcomingMovies();
  const nowPlayingMovies = await getPlayingMovies();

  return {
    props: {
      upcommingMovies: upcommingMovies,
      nowPlayingMovies: nowPlayingMovies,
    },
  };
}
