import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";
import { Col, Container, Image, Row } from "react-bootstrap";

export const ArtistView: FC = () => {
  const { name } = useParams<{ name: string }>();
  const { artists } = useContext(ArtistContext) as ArtistContextType;
  const artist = artists.find((a) => a.name === name);

  return (
    <Container>
      <Row>
        <Col>
          {artist?.image && (
            <Image
              alt=""
              style={{ maxWidth: "24rem" }}
              src={`https://localhost:5001/images/${artist.image}`}
            />
          )}
          {!artist?.image && (
            <Image
              alt=""
              style={{ maxWidth: "24rem" }}
              src={`https://localhost:5001/images/user_placeholder.png`}
            />
          )}
        </Col>
      </Row>
      <Row>
        <h1>{artist?.name}</h1>
      </Row>
      <Row>
        <p>{artist?.description}</p>
      </Row>
    </Container>
  );
};
