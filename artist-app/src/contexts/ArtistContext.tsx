import { FC, useState, useEffect, createContext } from "react";
import { IArtist } from "../interfaces/IArtist";
import { ArtistContextType } from "../types/ArtistContextType";
import { ArtistService } from "../services/ArtistService";

export const ArtistContext = createContext<ArtistContextType | null>(null);

export const ArtistProvider: FC = ({ children }) => {
  const [artists, setArtists] = useState<IArtist[]>([
    { id: "test", name: "Test Artist", description: "Test Description" },
  ]);

  useEffect(() => {
    getArtists();
  }, [artists]);

  const getArtists = async () => {
    const _artists = await ArtistService.getAll();
    setArtists(_artists);
  };

  return (
    <>
      <ArtistContext.Provider value={{ artists: artists }}>
        {children}
      </ArtistContext.Provider>
    </>
  );
};
