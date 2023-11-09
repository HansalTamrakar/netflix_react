import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] pl-[10%] px-12 absolute text-white bg-gradient-to-r from-gray-900 ">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="mx-2 bg-gray-800 text-white font-bold p-4 font-serif w-52 px-12 text-2xl bg-opacity-50 rounded-lg hover:bg-opacity-60">
          ▶️Play
        </button>
        <button className="mx-2 bg-gray-800 text-white  p-4 font-serif w-52 px-12 text-2xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
