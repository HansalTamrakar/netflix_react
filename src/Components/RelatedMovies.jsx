import React from "react";
import { IMG_CDN } from "./Constants";

const RelatedMovies = ({ original_title, overview, poster_path }) => {
  return (
    <div className="  h-68 text-white bg-black  p-8  w-72 justify-center ml-10 -mr-5">
      <img className="h-40 w-28 " src={IMG_CDN + poster_path} alt="" />

      <h1 className="text-xl">{original_title}</h1>

      <button className="  ml-2 mb-2 rounded-lg  h-6 w-36 text-white font-bold bg-purple-500 ">
        🚩Play
      </button>
      <button className="  ml-2 rounded-lg  h-6 w-36 text-white font-bold bg-red-500 ">
        🚀Subscribe
      </button>
    </div>
  );
};

export default RelatedMovies;
