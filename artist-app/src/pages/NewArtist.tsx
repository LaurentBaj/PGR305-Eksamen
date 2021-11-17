import { FC } from "react";
import { ArtistForm } from "../components/shared/ArtistForm";
import { Genre } from "../components/shared/Genre";

export const NewArtist: FC = () => {
  return (
    <>
      <h1>Create a new Artist</h1>
      <ArtistForm name={""} description={""} image={""} action={"POST"} genre={Genre.Classic} dateOfBirth={new Date()} />
    </>
  );
};

