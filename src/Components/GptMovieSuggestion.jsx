import React from "react";
import { IMG_CDN } from "./Constants";

const GptMovieSuggestion = ({ original_title, overview, poster_path }) => {
  return (
    <div className="h-screen flex justify-between text-white bg-black">
      <img className="h-3/4 ml-36" src={IMG_CDN + poster_path} alt="" />
      <div className="text-left pt-24 pr-44 pl-44  ml-32 ">
        <h1 className="text-6xl">{original_title}</h1>
        <div className="pt-10 font-serif w-1/2 text-xl text-justify">
          {overview}
        </div>
        <button className="  mt-[18px] ml-2 rounded-lg  h-14 w-36 text-white font-bold bg-purple-500">
          🚩Play
        </button>
        <button className="  mt-[18px] ml-8 rounded-lg  h-14 w-36 text-white font-bold bg-red-500">
          🚀Subscribe
        </button>
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
