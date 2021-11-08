import { ChangeEvent, FC, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "./Genre";

const ArtistForm: FC = () => {
  const [newArtist, setNewArtist] = useState<IArtist>({
    name: "",
    description: "",
    // image: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value, files } = event.target;

    switch (name) {
      case "name":
        setNewArtist({ ...newArtist, name: value });
        break;
      case "image":
        if (files) {
          setNewArtist({ ...newArtist, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
    }
  };

  const postNewArtist = () => {
    console.log(newArtist);
    console.log(newImage);
    ArtistService.postNewArtist(newArtist, newImage as File);
  };

  return (
    <>
      <h1>New Artist</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Artist Name: </Form.Label>
          <Form.Control name="name" onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <br></br>
        <Row>
          <Col>
            <Form.Select>
              {Object.keys(Genre).map((i) => (
                <option>{i}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Control placeholder="Date of birth" />
          </Col>
        </Row>
      </Form>
      <Button onClick={postNewArtist}>Save</Button>
    </>
  );
};

export default ArtistForm;
