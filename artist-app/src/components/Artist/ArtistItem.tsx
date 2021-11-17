import { FC } from "react";
import { Card } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";

const ArtistItem: FC<IArtist> = ({ name, image }) => {
  const containsImage = () => {
    return image
      ? `https://localhost:5001/images/${image}`
      : `https://localhost:5001/images/user_placeholder.png`;
  };

  return (
    <Card style={{ width: "18rem" }} className={"layeredbox card"}>
      <Card.Img
        style={{ objectFit: "cover", height: "12rem" }}
        variant="top"
        alt={name}
        src={containsImage()}
      />
      <Card.Body>
        <Card.Title style={{ color: "black" }} className={"text-center pt-2"}>
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ArtistItem;
