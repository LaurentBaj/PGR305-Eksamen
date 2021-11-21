import { FC, ChangeEvent, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";

export const NewArtistForm: FC = () => {
  const [newArtist, setNewArtist] = useState<IArtist>({
    name: "",
    description: "",
    image: "",
    dateOfBirth: "",
    genre: "",
  });
  const [newImage, setNewImage] = useState<File>();
  const history = useHistory();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case "name":
        setNewArtist({ ...newArtist, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewArtist({ ...newArtist, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "description":
        setNewArtist({ ...newArtist, description: value });
        break;
      case "date":
        setNewArtist({ ...newArtist, dateOfBirth: value });
        break;
      case "genre":
        setNewArtist({ ...newArtist, genre: value });
        break;
    }
  };

  const postNewArtist = () => {
    ArtistService.postNewArtist(newArtist, newImage as File);
    history.push("/artists");
  };

  return (
    <Form>
      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Artist Name: </Form.Label>
          <Form.Control name="name" onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Add image: </Form.Label>
          <Form.Control name="image" onChange={handleChange} type="file" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group className="mb-3">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            name="description"
            onChange={handleChange}
            type="text"
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Genre: </Form.Label>
          <Form.Control
            name="genre"
            onChange={handleChange}
            type="text"
            placeholder="Rock, Pop, Classic..."
          />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Date of Birth: </Form.Label>
          <Form.Control
            name="date"
            onChange={handleChange}
            type="text"
            placeholder={"dd/mm/yyyy"}
          />
        </Form.Group>
      </Row>
      <Button onClick={postNewArtist}>Submit</Button>
    </Form>
  );
};
