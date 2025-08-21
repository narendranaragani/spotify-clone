import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";

const NewreleasesDetails = () => {
  const { NewReleaseplaylistId } = useParams();
  const [album, setAlbum] = useState(null);
  const [currentSong,setCurrentSong]=useState(null)

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const url = `https://apis2.ccbp.in/spotify-clone/album-details/${NewReleaseplaylistId}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched album:", data);
        setAlbum(data);
      } catch (error) {
        console.error("Album data fetch failed", error);
      }
    };
    fetchAlbum();
  }, [NewReleaseplaylistId]);


  if (!album) {
   return (
     <div
       role="status"
       className="bg-[#181818] min-h-screen p-5 flex justify-center items-center"
     >
       <svg
         aria-hidden="true"
         class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
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

return (
  <>
    <Navbar />
    <div className="bg-gradient-to-b from-[#3d1f1f] to-black min-h-screen text-white">
      <div className="flex justify-end p-4">
        <Link to="/" className="text-white hover:text-gray-400">
          ← Back
        </Link>
      </div>
      <div className="p-5 flex flex-col sm:flex-row items-center gap-5 mb-6">
        <img
          src={album.images[0]?.url}
          alt={album.name}
          className="w-42 h-42 sm:w-48 sm:h-48 md:w-50 md:h-50 rounded-md"
        />
        <div>
          <p className="text-sm text-gray-400">{album.album_type}</p>
          <h1 className="font-bold text-4xl mb-3 sm:text-3xl md:text-5xl lg:text-6xl">
            {album.name}
          </h1>
          <p className="text-sm md:text-md text-gray-400 mb-3 font-semibold">
            {album.artists.map((a) => a.name).join(", ")}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {album.total_tracks} songs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 md:grid md:grid-cols-5 list-none text-center mb-3">
        <span>#</span>
        <span>Title</span>
        <span>Artists</span>
        <span>Duration</span>
      </div>
      <hr className="w-full text-gray-600" />
      <div className="text-center mt-5">
        {album.tracks.items.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setCurrentSong(item)}
              className="grid grid-cols-4 md:grid md:grid-cols-5 text-center py-2 max-h-screen gap-3 hover:bg-[#282828] rounded-md cursor-pointer transition"
            >
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.artists.map((a) => a.name).join(", ")}</span>
              <span>
                {Math.floor(item.duration_ms / 60000)}:
                {String(Math.floor((item.duration_ms % 60000) / 1000)).padStart(
                  2,
                  "0"
                )}
              </span>
            </div>
          );
        })}
      </div>
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 gap-3">
          <div className="flex items-center gap-4">
            <img src={album.images[0]?.url} className="w-12 h-12 rounded" />
            <div>
              <p className="text-white font-bold">{currentSong.name}</p>
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
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  </>
);
};

export default NewreleasesDetails;
