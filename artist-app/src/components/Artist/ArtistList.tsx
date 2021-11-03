import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import ArtistItem from "./ArtistItem";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";

const ArtistList: FC = () => {
  const { artists } = useContext(ArtistContext) as ArtistContextType;

  const createArtistList = () => {
    return artists.map((artist: IArtist, key: number) => {
      return (
        <>
        <Col className="mb-3" xs={12} sm={6} md={4} lg={3} key={key}>
          <ArtistItem
              key={key}
              id={artist.id}
              name={artist.name}
              description={artist.description}
            />
        </Col>
        </>
      );
    });
  };

  return <Row>{createArtistList()}</Row>;
};

export default ArtistList;
