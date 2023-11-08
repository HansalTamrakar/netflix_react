import React from "react";

const MovieListSearch = ({ item, i, func }) => {
  return (
    <div className="bg-gray-900 w-3/4 border text-white p-4 flex justify-between ml-24">
      <button
        className="cursor-pointer "
        onClick={() => {
          func(item.original_title);
          
        }}
      >
        {i + 1}. {item.original_title}
      </button>
      <button className="cursor-pointer">↖️</button>
    </div>
  );
};

export default MovieListSearch;
