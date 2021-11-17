import { Genre } from "../components/shared/Genre";

export interface IArtist {
  id?: string;
  name: string;
  description: string;
  image?: string;
  genre?: Genre;
  dateOfBirth?: string;
  action?: string;
}
