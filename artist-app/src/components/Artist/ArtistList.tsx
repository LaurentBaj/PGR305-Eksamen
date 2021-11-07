import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import ArtistItem from "./ArtistItem";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { Link } from "react-router-dom";

const ArtistList: FC = () => {
  const { artists } = useContext(ArtistContext) as ArtistContextType;

  const createArtistList = () => {
    return artists.map((artist: IArtist, key: number) => {
      return (
        <>
          <Col className="mb-3" xs={12} sm={6} md={4} lg={3} key={key}>
            <Link to={`/artists/${artist.name}`}>
              <ArtistItem
                key={key}
                id={artist.id}
                name={artist.name}
                image={artist.image}
                description={artist.description}
              />
            </Link>
          </Col>
        </>
      );
    });
  };

  return <Row>{createArtistList()}</Row>;
};

export default ArtistList;
