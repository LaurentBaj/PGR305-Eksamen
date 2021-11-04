import { IArtist } from "./IArtist";

export interface IAlbum {
  id?: string;
  name: string;
  songs: string[];
  artist: IArtist;
}
