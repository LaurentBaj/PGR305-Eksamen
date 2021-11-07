import { FC } from "react";
import { Card } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import styles from "../../styles/card-styles.module.css";

const ArtistItem: FC<IArtist> = ({ id, name, image, description }) => {
  return (
    <Card className={styles.layeredbox}>
      {image && (
        <Card.Img
          variant="top"
          alt=""
          src={`https://localhost:5001/images/${image}`}
        />
      )}
      {!image && (
        <Card.Img
          variant="top"
          alt=""
          src={`https://localhost:5001/images/user_placeholder.png`}
        />
      )}
      <Card.Body>
        <Card.Title className={"text-center pt-3"}>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ArtistItem;
