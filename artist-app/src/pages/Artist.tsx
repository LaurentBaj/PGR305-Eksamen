import { FC } from "react";
import { Link } from "react-router-dom";
import ArtistList from "../components/Artist/ArtistList";
import { Button } from "react-bootstrap";

const Artist: FC = () => {
  return (
    <>
      <h1 className="text-center pt-3">All artists</h1>
      <Link to="/newartist">
        <Button variant="primary">New Artist</Button>
      </Link>
      <ArtistList />
    </>
  );
};

export default Artist;
