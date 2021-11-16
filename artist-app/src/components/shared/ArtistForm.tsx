import { ChangeEvent, FC, useState } from "react";
import { useHistory } from "react-router";
import { Form, Row, Col } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "./Genre";

export const ArtistForm: FC<IArtist> = ({ id, name, description, action, image }) => {
  const artist = { id, name, description, image }
  const history = useHistory()

  const [_name, _setName] = useState(name)
  const [_description, _setDescription] = useState(description)
  const [_image, _setImage] = useState(image)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value, files } = event.target;

    switch (name) {
      case "image":
        if (files) {
          artist.image = files[0].name
          _setImage(files[0].name)
        }
        break;
    }
  };


  const handleForm = () => {
    artist.name = _name
    artist.description = _description
    artist.image = _image

    if (action === "PUT") {
      ArtistService.updateArtist(artist as IArtist)
    }
    if (action === "POST") {
      ArtistService.postNewArtist(artist as IArtist, image as any)
    }

    history.push("/artists")
  }

  return (
    <>
      <h1>{name}</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Artist Name: </Form.Label>
              <Form.Control value={_name} onChange={e => _setName(e.target.value)} type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control name="image" onChange={handleChange} type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control value={_description} onChange={e => _setDescription(e.target.value)} as="textarea" rows={3}
          />
        </Form.Group>
        <br></br>
        <Row>
          <Col>
            <Form.Select name="genre">
              {Object.keys(Genre).map((i) => (
                <option>{i}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Control type="date" name="date" placeholder="Date of birth" />
          </Col>
        </Row>
        <button onClick={handleForm}>Edit</button>
      </Form>
    </>
  );
};
