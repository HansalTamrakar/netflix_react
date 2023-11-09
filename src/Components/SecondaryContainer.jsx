import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="-mt-96 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <div className="bg-black">
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Releases"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
