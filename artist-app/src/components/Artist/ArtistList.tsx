import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import ArtistItem from "./ArtistItem";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { Link } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";

const ArtistList: FC = () => {
  const { artists, loading } = useContext(ArtistContext) as ArtistContextType;

  const createArtistList = () => {
    if (loading) {
      return (
        <Col className="text-center">
          <LoadingSpinner />
        </Col>
      );
    }

    return artists.map((artist: IArtist, key: number) => {
      return (
        <Col key={key}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/artist-details/${artist.id}`}
          >
            <ArtistItem
              id={artist.id}
              name={artist.name}
              image={artist.image}
              description={artist.description}
            />
          </Link>
        </Col>
      );
    });
  };

  return <Row className="g-4">{createArtistList()}</Row>;
};

export default ArtistList;
