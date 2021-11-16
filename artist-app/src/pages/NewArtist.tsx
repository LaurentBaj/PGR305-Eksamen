import { FC } from "react";
import { ArtistForm } from "../components/shared/ArtistForm";

export const NewArtist: FC = () => {
  return (
    <>
      <h1>Create a new Artist</h1>
      <ArtistForm name={""} description={""} action={"POST"} />
    </>
  );
};

