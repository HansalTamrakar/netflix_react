import React from "react";
import { IMG_CDN } from "./Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="h-[200px] w-60 border border-black mr-5 ">
      <img className="h-[200px] w-full" src={IMG_CDN + posterPath} alt="no" />
    </div>
  );
};

export default MovieCard;
