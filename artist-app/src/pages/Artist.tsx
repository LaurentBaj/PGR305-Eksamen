import { FC } from "react";
import { Link } from "react-router-dom";
import ArtistList from "../components/Artist/ArtistList";
import { Button } from "react-bootstrap";

const Artist: FC = () => {
  return (
    <>
      <ArtistList />
    </>
  );
};

export default Artist;
