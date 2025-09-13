import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchSongs = ({ children }) => {
  const [searchSong, setSearchSong] = useState("");

  return (
    <SearchContext.Provider value={{ searchSong, setSearchSong }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchSongs;
