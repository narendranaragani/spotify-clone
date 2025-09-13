import React from "react";
import { useContext } from "react";
import { SearchContext } from "../searchContext";
import { useNavigate } from "react-router";

const FeturesPlayList = ({ playlists, isLoading }) => {
  const { searchSong } = useContext(SearchContext);
  const navigate = useNavigate();
   const filteredPlaylists = playlists.filter((playlist) =>
     playlist.name.toLowerCase().includes(searchSong.toLowerCase())
   );

  return (
    <>
      {isLoading ? (
        <div
          role="status"
          className="bg-[#181818] min-h-screen p-5 flex justify-center items-center"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="p-5">
          <h1 className="text-[#FFFFFF] font-bold text-xl mb-5 mt-20">
            Editor's Picks
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 overflow-auto gap-5 min-h-[300px]">
            {filteredPlaylists.length === 0 ? (
              <div className="col-span-full flex justify-center items-center">
                <p className="text-white text-lg font-semibold">
                  No playlists found in Editor's Picks
                </p>
              </div>
            ) : (
              filteredPlaylists.map((playlist) => (
                <div
                  onClick={() => {
                    navigate(`/playlist/${playlist.id}`);
                  }}
                  key={playlist.id}
                  className="group bg-[#242424] p-3 rounded-lg relative cursor-pointer"
                >
                  <div className="flex justify-end items-end relative">
                    <img
                      width="45"
                      height="45"
                      className="absolute bg-black rounded-3xl m-1 transition-transform duration-300 hover:brightness-125 opacity-0 group-hover:opacity-100 transition-opacity mb-3"
                      src="https://img.icons8.com/ios-filled/50/40C057/circled-play.png"
                      alt="circled-play"
                    />
                    <img
                      className="rounded-lg mb-2"
                      src={playlist.images[0]?.url}
                      alt={playlist.name}
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm p-2">
                      {playlist.name}
                    </p>
                    <p className="text-white pl-2 text-xs mt-2">
                      {playlist.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeturesPlayList;
