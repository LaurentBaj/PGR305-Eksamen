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
        <Card.Title style={{ color: "black" }} className={"text-center pt-2"}>
          {name}
        </Card.Title>
        <Card.Subtitle
          style={{ fontSize: "80%", color: "gray" }}
          className={"text-center"}
        >
          Click me to read more
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ArtistItem;
