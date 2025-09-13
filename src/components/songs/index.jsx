import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SearchContext } from "../searchContext";
import Navbar from "../Navbar";

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [likedSongs, setLikedSongs] = useState({});
  const { searchSong } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongsDetails = async () => {
      try {
        const url = `https://apis2.ccbp.in/spotify-clone/playlists-details/${playlistId}`;
        const response = await fetch(url);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.log("Songs data fetch failed", error);
      }
    };
    fetchSongsDetails();
  }, [playlistId]);

  const playSongs = (track) => {
    if (track.preview_url) {
      setCurrentSong(track);
    } else {
      console.log("Preview not available");
    }
  };

  const likedHandler = (trackId) => {
    setLikedSongs((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  if (!playlist) {
    return (
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
    );
  }

  const filteredTracks = playlist.tracks.items.filter((item) =>
    item.track.name.toLowerCase().includes(searchSong.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#5a2219] to-black text-white">
        <div className="flex justify-end mt-15">
          <button
            onClick={() => navigate(-1)}
            className="p-4 text-white hover:text-gray-400"
          >
            ← Back
          </button>
        </div>

        <div className="p-5 flex flex-col sm:flex-row items-center gap-5 mb-6">
          <img
            src={playlist.images[0]?.url}
            alt={playlist.name}
            className="w-42 h-42 sm:w-48 sm:h-48 md:w-50 md:h-50 rounded-md"
          />
          <div>
            <p className="font-semibold text-gray-400 mb-3 text-md sm:text-left">
              {playlist.owner.display_name}
            </p>
            <p className="font-bold text-4xl mb-3 sm:text-3xl md:text-5xl lg:text-6xl">
              {playlist.name}
            </p>
            <p className="text-sm md:text-md text-gray-400 mb-3 font-semibold">
              {playlist.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid md:grid-cols-7 list-none text-center mb-3 ">
          <li>#</li>
          <li className="text-gray-300 font-bold">Title</li>
          <li className="text-gray-300 font-bold hidden md:block">Album</li>
          <li className="text-gray-300 font-bold mr-7 hidden md:block">
            Date added
          </li>
          <li className="text-gray-300 font-bold mr-7 hidden md:block">Time</li>
          <li className="text-gray-300 font-bold">Like </li>
        </div>
        <hr className="w-full text-gray-600" />

        <div className="max-h-100 overflow-y-scroll mt-5">
          {filteredTracks.length === 0 ? (
            <p className="text-white text-center p-5">
              No matching songs found for "{searchSong}"
            </p>
          ) : (
            filteredTracks.map((item, index) => {
              const track = item.track;
              return (
                <div
                  key={index}
                  className="group grid grid-cols-3 md:grid md:grid-cols-7 text-center py-2 max-h-screen gap-3 hover:bg-[#282828] rounded-md cursor-pointer transition"
                >
                  <div className="flex justify-center items-center relative w-6">
                    <span
                      className={`text-[#969696] ml-20 md:ml-40 font-bold transition ${
                        currentSong?.id === track.id
                          ? "opacity-0"
                          : "group-hover:opacity-0"
                      }`}
                    >
                      {index + 1}
                    </span>

                    {currentSong?.id === track.id ? (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios-glyphs/30/1DB954/pause--v1.png"
                        alt="pause"
                        className="absolute opacity-100 ml-20 md:ml-40"
                        onClick={() => setCurrentSong(null)}
                      />
                    ) : (
                      <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios-glyphs/30/1DB954/play--v1.png"
                        alt="play"
                        className="absolute opacity-0 ml-20 md:ml-40 group-hover:opacity-100 transition"
                        onClick={() => playSongs(track)}
                      />
                    )}
                  </div>
                  <div>
                    <span
                      className="font-semibold block w-[180px] truncate pr-10 md:pl-0"
                      title={track.name}
                    >
                      {track.name}
                    </span>
                  </div>
                  <span
                    className="text-[#969696] font-bold block w-[180px] truncate hidden md:block"
                    title={track.album.name}
                  >
                    {track.album.name}
                  </span>
                  <span className="text-[#969696] font-bold hidden md:block">
                    {new Date(item.added_at).toLocaleDateString()}
                  </span>
                  <span className="text-[#969696] font-bold hidden md:block">
                    {Math.floor(track.duration_ms / 60000)}:
                    {Math.floor((track.duration_ms % 60000) / 1000)
                      .toString()
                      .padStart(2, "0")}
                  </span>
                  <span
                    className="text-[#969696] ml-2 md:ml-6 font-bold flex justify-center cursor-pointer"
                    onClick={() => likedHandler(track.id)}
                  >
                    <img
                      width="24"
                      height="24"
                      src={
                        likedSongs[track.id]
                          ? "https://img.icons8.com/ios-glyphs/50/FA5252/filled-like.png"
                          : "https://img.icons8.com/material-outlined/24/FFFFFF/filled-like.png"
                      }
                      alt="like-icon"
                    />
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 gap-3">
          <div className="flex items-center gap-4">
            <img
              src={currentSong.album.images[0]?.url}
              alt={currentSong.name}
              className="w-12 h-12 rounded"
            />
            <div className="flex flex-col sm:text-left">
              <p className="font-semibold text-white text-sm sm:text-md">
                {currentSong.name}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                {currentSong.artists.map((a) => a.name).join(", ")}
              </p>
            </div>
          </div>

          <audio
            controls
            autoPlay
            src={currentSong.preview_url}
            className="md:w-250 sm:w-50"
          />
        </div>
      )}
    </>
  );
};

export default PlaylistDetails;
