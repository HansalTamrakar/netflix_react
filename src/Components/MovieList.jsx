import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);
  return (
    <div className="px-4 ">
      <h1 className="text-3xl font-bold py-4 ml-6 text-white">{title}</h1>
      <div className="flex h-56  p-6 overflow-x-scroll scrollbar-none  ">
        <div className="flex   ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
