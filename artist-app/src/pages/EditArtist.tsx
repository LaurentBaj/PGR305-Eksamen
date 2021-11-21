import { FC, useState, useContext } from "react";
import { useParams } from "react-router";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";
import { EditArtistForm } from "../components/Artist/EditArtistForm";

export const EditArtist: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artists } = useContext(ArtistContext) as ArtistContextType;
  const [artist] = useState(artists.find((artist) => artist.id === id));

  return (
    <>
      <EditArtistForm
        id={artist?.id as string}
        name={artist?.name as string}
        description={artist?.description as string}
        image={artist?.image}
        genre={artist?.genre}
        dateOfBirth={artist?.dateOfBirth}
      />
    </>
  );
};
