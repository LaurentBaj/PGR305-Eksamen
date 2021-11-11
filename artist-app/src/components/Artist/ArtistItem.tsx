import { FC } from "react";
import { Card } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";

const ArtistItem: FC<IArtist> = ({ id, name, image, description }) => {
  return (
    <Card className={"layeredbox card"}>
      {image && (
        <Card.Img
          variant="top"
          alt={name}
          src={`https://localhost:5001/images/${image}`}
        />
      )}
      {!image && (
        <Card.Img
          variant="top"
          alt={name}
          src={`https://localhost:5001/images/user_placeholder.png`}
        />
      )}
      <Card.Body>
        <Card.Title style={{ color: "black" }} className={"text-center pt-2"}>
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ArtistItem;
