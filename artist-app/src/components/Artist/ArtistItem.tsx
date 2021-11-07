import { FC } from "react";
import { Card } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";

const ArtistItem: FC<IArtist> = ({ id, name, image, description }) => {
  return (
    <Card>
      <Card.Body>
        {image && (
          <Card.Img alt="" src={`https://localhost:5001/images/${image}`} />
        )}
        {!image && (
          <Card.Img
            alt=""
            src={`https://localhost:5001/images/user_placeholder.png`}
          />
        )}
        <Card.Title className={"text-center pt-3"}>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ArtistItem;
