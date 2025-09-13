import React from 'react'
import { useContext } from "react";
import { SearchContext } from "../searchContext";
import { Link, useNavigate } from 'react-router';

const NewReleasesPlayList = ({ newReleases }) => {
   const { searchSong } = useContext(SearchContext);

  const navigate = useNavigate()
  console.log(newReleases)
  const filteredReleases = newReleases.filter((item) =>
    item.name.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-[#FFFFFF] font-bold text-xl mb-5">New Releases</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[300px]">
        {filteredReleases.length === 0 ? (
          <div className="col-span-full flex justify-center items-center">
            <p className="text-white text-lg font-semibold">
              No new-releases Playlist found in New Releases
            </p>
          </div>
        ) : (
          filteredReleases.map((item) => (
            <div
              key={item.id}
              className="bg-[#242424] p-3 rounded-lg hover:bg-[#2e2e2e] transition duration-200"
              onClick={() => {
                navigate(`/newreleases/${item.id}`);
              }}
            >
              <img
                className="rounded-lg mb-2 cursor-pointer w-full h-[155px] object-cover"
                src={item.images[1]?.url || item.images[0]?.url}
                alt={item.name}
              />
              <p className="text-sm text-gray-400 font-semibold truncate">
                {item.name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewReleasesPlayList;
