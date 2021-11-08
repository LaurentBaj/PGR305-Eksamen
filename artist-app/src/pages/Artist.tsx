import { FC } from "react";
import { Link } from "react-router-dom";
import ArtistList from "../components/Artist/ArtistList";
import { ArtistProvider } from "../contexts/ArtistContext";
import { Button } from "react-bootstrap";

const Artist: FC = () => {
  return (
    <>
      <h1>Artist</h1>
      <Link to="/newartist">
        <Button variant="primary">New Artist</Button>
      </Link>
      <ArtistProvider>
        <ArtistList />
      </ArtistProvider>
    </>
  );
};

export default Artist;
