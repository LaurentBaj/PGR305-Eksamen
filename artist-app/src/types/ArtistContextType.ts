import { IAlbum } from "../interfaces/IAlbum";
import { IArtist } from "../interfaces/IArtist";

export type ArtistContextType = {
  artists: IArtist[];
  loading: boolean;
  albums: IAlbum[];
  getArtists: () => void;
  getAlbums: () => void;
};
