import { FC, useState, useEffect, createContext } from "react";
import { IArtist } from "../interfaces/IArtist";
import { ArtistContextType } from "../types/ArtistContextType";
import { ArtistService } from "../services/ArtistService";

export const ArtistContext = createContext<ArtistContextType | null>(null);

export const ArtistProvider: FC = ({ children }) => {
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = async () => {
    const _artists = await ArtistService.getAll();
    setLoading(false);
    setArtists(_artists);
  };

  return (
    <>
      <ArtistContext.Provider value={{ artists, loading }}>
        {children}
      </ArtistContext.Provider>
    </>
  );
};
