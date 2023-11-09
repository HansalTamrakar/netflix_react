import React, { useEffect, useRef, useState } from "react";
import { lang } from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import { API_ptions } from "./Constants";
import MovieListSearch from "./MovieListSearch";
import MovieCard from "./MovieCard";
import GptMovieSuggestion from "./GptMovieSuggestion";
import RelatedMovies from "./RelatedMovies";

const GptSearchbar = () => {
  function handleClickMovie(value) {
    searchText.current.value = value;
  }

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [items, setItems] = useState();
  const [value, setValue] = useState();
  const [array, setarray] = useState();

  function handlesearch(search) {
    searchText.current.value = null;
    setarray(items);
  }

  const handleGptSerchClick = async () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_ptions
    )
      .then((response) => response.json())
      .then((response) => {
        setItems(response.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    handleGptSerchClick();
  }, [items]);

  return (
    <>
      {" "}
      <div className=" flex justify-center self-baseline ml-88 text-center  bg-purple-400 ">
        <form
          className="p-6 m-6 mt-[5%] w-3/4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <input
              ref={searchText}
              type="text"
              className="p-4 mt-4 w-3/4   "
              placeholder={lang[langKey]?.gptSearchPlaceholder}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              className="  mt-[18px] ml-2 rounded-lg bg-red-500 h-14 w-36 text-white font-bold hover:bg-purple-500"
              onClick={() => {
                handlesearch(searchText?.current?.value);
              }}
            >
              {lang[langKey]?.search}
            </button>
          </div>

          {items &&
            items?.map((item, i) => {
              return (
                <MovieListSearch item={item} i={i} func={handleClickMovie} />
              );
            })}
            
        </form>
      </div>
      <div>
        {array && !searchText.current.value && (
          <GptMovieSuggestion {...array[0]} />
        )}
      </div>
      <div className="flex w-screen  bg-black flex-wrap">
        {array &&
          !searchText.current.value &&
          array.map((item) => {
            return <RelatedMovies {...item} />;
          })}
      </div>
    </>
  );
};

export default GptSearchbar;
