import { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";
import { Col, Image, Row } from "react-bootstrap";

export const ArtistDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artists } = useContext(ArtistContext) as ArtistContextType;
  const [artist] = useState(artists.find((artist) => artist.id === id));

  // check if artists contains a image
  const containsImage = () => {
    return artist?.image
      ? `https://localhost:5001/images/${artist.image}`
      : `https://localhost:5001/images/user_placeholder.png`;
  };

  return (
    <>
      <Row className="m-5 text-center">
        <Col>
          <Image
            className={"layeredbox"}
            style={{ maxWidth: "20rem" }}
            src={containsImage()}
          />
        </Col>
      </Row>
      <Row>
        <h1>{artist?.name}</h1>
        <p>{artist?.description}</p>
      </Row>
      <Row>
        <h2>Albums</h2>
        <p>There are currently no albums. Want to add one?</p>
      </Row>
    </>
  );
};