import React from "react";
import { useContext } from "react";
import { SearchContext } from "../searchContext";
import { useNavigate } from "react-router";

const CategoryPlayList = ({ categoryLists }) => {
  const navigate = useNavigate();
  const { searchSong } = useContext(SearchContext);

  const filteredPlaylists = categoryLists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchSong.toLowerCase())
  );
  return (
    <>
      <div className="p-5">
        <h1 className="text-[#FFFFFF] font-bold text-xl mb-5">
          Genres & Moods
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px]">
          {filteredPlaylists.length === 0 ? (
            <div className="col-span-full flex justify-center items-center">
              <p className="text-white text-lg font-semibold">
                No playlists found in Genres & Moods
              </p>
            </div>
          ) : (
            filteredPlaylists.map((categoryplaylist) => (
              <div
                key={categoryplaylist.id}
                className="bg-[#242424] p-3 rounded-lg cursor-pointer"
                onClick={() => {
                  navigate(`/categorylist/${categoryplaylist.id}`);
                }}
              >
                <img
                  className="rounded-lg mb-2 cursor-pointer"
                  src={categoryplaylist.icons[0]?.url}
                  alt={categoryplaylist.name}
                />
                <p className="text-sm text-gray-400 font-semibold">
                  {categoryplaylist.name}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPlayList;
