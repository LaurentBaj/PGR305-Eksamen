import { Genre } from "../components/shared/Genre";
import { IAlbum } from "./IAlbum";

export interface IArtist {
  id?: string;
  name: string;
  description: string;
  image?: string;
  dateOfBirth?: Date;
  genre?: Genre;
  action?: string;
}
