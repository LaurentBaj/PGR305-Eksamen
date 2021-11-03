import { FC } from "react";
import ArtistList from "../components/Artist/ArtistList";
import { ArtistProvider } from "../contexts/ArtistContext";

const Artist: FC = () => {
  return (
    <>
      <h1>Artist</h1>
      <ArtistProvider>
        <ArtistList />
      </ArtistProvider>
    </>
  );
};

export default Artist;
