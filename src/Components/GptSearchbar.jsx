import React from "react";
import { lang } from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" flex justify-center self-baseline ml-88  bg-purple-400">
      <form className="p-6 m-6 mt-[5%] bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 w-80 col-span-9 rounded-lg "
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button className=" col-span-3 mt-[18px] ml-2 rounded-lg bg-red-500 h-14 w-36 text-white font-bold hover:bg-purple-500">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
