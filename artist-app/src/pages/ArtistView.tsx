import { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";
import { Col, Image, Row } from "react-bootstrap";
import styles from "../styles/card-styles.module.css";

export const ArtistView: FC = () => {
  const { name } = useParams<{ name: string }>();
  const { artists } = useContext(ArtistContext) as ArtistContextType;
  const [artist] = useState(artists.find((a) => a.name === name));

  // check if artists contains a image
  const containsImage = () => {
    if (artist?.image) {
      return (
        <Image
          className={styles.layeredbox}
          style={{ maxWidth: "20rem" }}
          src={`https://localhost:5001/images/${artist.image}`}
        />
      );
    } else {
      return (
        <Image
          style={{ maxWidth: "20rem" }}
          src={`https://localhost:5001/images/user_placeholder.png`}
        />
      );
    }
  };

  return (
    <>
      <Row className="m-5 text-center">
        <Col>{containsImage()}</Col>
      </Row>
      <Row>
        <Col>
          <h1>{artist?.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{artist?.description}</p>
        </Col>
      </Row>
    </>
  );
};
