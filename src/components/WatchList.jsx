import React, { useState, useEffect } from "react";
import genreids from "../Utility/Genres";

function WatchList({ watchlist, handleRemoveFromWatchList, setWatchList }) {
  let [search, setSearch] = useState("");
  let [genresList, setGenresList] = useState(["All Genres"]);
  let [currGenre, setCurrGenre] = useState("All Genres");

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreaing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreaing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenresList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex flex-row justify-center m-4">
        {genresList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "hover:cursor-pointer flex justify-center items-center h-[2rem] p-3 m-2 rounded-lg bg-blue-400  text-white font-semibold "
                  : "hover:cursor-pointer flex justify-center items-center h-[2rem] p-3 m-2 rounded-lg bg-gray-400  text-white font-semibold"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-5  ">
        <input
          type="text"
          placeholder="Search Movies"
          className="bg-gray-200 p-3 w-[18rem] outline-none"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500  text-center">
          <thead className="border-b-2 border-gray-200 text-black font-bold">
            <tr>
              <th>Name</th>
              <th className="flex flex-row justify-center gap-3 ">
                <div>
                  <i
                    className="fa-solid fa-arrow-up hover:cursor-pointer"
                    onClick={sortIncreasing}
                  ></i>
                </div>
                <div>Ratings</div>
                <div>
                  <i
                    className="fa-solid fa-arrow-down hover:cursor-pointer"
                    onClick={sortDecreasing}
                  ></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj, index) => {
                return (
                  <tr className="border-b-2 border-gray-200" key={index}>
                    <td className="flex items-center px-5 py-5">
                      <img
                        className="w-[6rem] h-[7rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="poster"
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td
                      className="text-red-700 hover:cursor-pointer m-8"
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
