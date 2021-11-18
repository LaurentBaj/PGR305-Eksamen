import { FC } from "react";
import { NewArtistForm } from "../components/Artist/NewArtistForm";


export const NewArtist: FC = () => {
  return (
    <>
      <h1>Create a new Artist</h1>
      <NewArtistForm />
    </>
  );
};

