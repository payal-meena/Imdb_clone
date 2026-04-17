import React from "react";
// import add_icon from '../assets/add_icon.png'
// import remove_icon from '../assets/remove_icon.png'
import add_icon from "../assets/heart_icon.jpg";
import remove_icon from "../assets/fill_heart_icon.jpg";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const doesContain = (movieObj) => watchlist.some((m) => m.id === movieObj.id);
  return (
    <div
      className="w-full max-w-[210px] h-[45vh] sm:h-[48vh] md:h-[50vh]
             bg-center bg-cover rounded-xl 
             hover:scale-105 duration-300 hover:cursor-pointer 
             flex items-end mb-4 relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
        willChange: "transform",
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="overflow-hidden absolute top-2 right-2 w-7 h-7 p-1 bg-white cursor-pointer rounded-full flex justify-center items-center"
        >
          <img src={remove_icon} alt="" className="w-full h-full scale-120" />
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="absolute top-2 right-2 w-7 h-7 p-1 bg-white cursor-pointer rounded-full"
        >
          <img src={add_icon} alt="" className="" />
        </div>
      )}

      <div className="text-white text-center w-full p-2 font-bold  bg-gray-900/60 rounded-b-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
