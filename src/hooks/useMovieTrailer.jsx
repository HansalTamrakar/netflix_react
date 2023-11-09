import React, { useEffect } from "react";
import { API_ptions } from "../Components/Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MoviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_ptions
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};
export default useMovieTrailer;
