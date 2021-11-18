import { Genre } from "../components/shared/Genre";

export interface IArtist {
  id?: string;
  name: string;
  description: string;
  image?: string;
  genre?: string;
  dateOfBirth?: string;
  action?: string;
}
