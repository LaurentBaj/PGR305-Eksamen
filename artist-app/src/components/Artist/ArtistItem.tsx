import { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IArtist } from "../../interfaces/IArtist";

const ArtistItem: FC<IArtist> = ({ id, name, description }) => {
  return (
    <Link to={"/artistDetail"}>
      <Card>
      <Card.Body>
          <Card.Img src={"https://localhost:5001/images/user_placeholder.png"}/>
          <Card.Title className={"text-center pt-3"}>{name}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ArtistItem;
