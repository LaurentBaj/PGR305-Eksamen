import { FC, useState, useEffect, createContext } from "react";
import { IArtist } from "../interfaces/IArtist";
import { ArtistContextType } from "../types/ArtistContextType";
import { ArtistService } from "../services/ArtistService";
import { AlbumService } from "../services/AlbumService";
import { IAlbum } from "../interfaces/IAlbum";

export const ArtistContext = createContext<ArtistContextType | null>(null);

export const ArtistProvider: FC = ({ children }) => {
  const [artists, setArtists] = useState<IArtist[]>([]);
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getArtists();
  //   getAlbums();
  // }, []);

  const getArtists = async () => {
    const _artists = await ArtistService.getAll();
    setLoading(false);
    setArtists(_artists);
  };

  const getAlbums = async () => {
    const _albums = await AlbumService.getAll();
    setAlbums(_albums);
  };

  return (
    <>
      <ArtistContext.Provider value={{ artists, loading, albums, getArtists }}>
        {children}
      </ArtistContext.Provider>
    </>
  );
};
