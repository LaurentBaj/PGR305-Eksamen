import { ChangeEvent, FC, useState } from "react";
import { useHistory } from "react-router";
import { Form, Row, Col } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "./Genre";


export const ArtistForm: FC<IArtist> = ({ id, name, description, action, image, genre, dateOfBirth }) => {
  const artist = { id, name, description, image, genre, dateOfBirth }
  const history = useHistory()

  const [_name, _setName] = useState(name)
  const [_description, _setDescription] = useState(description)
  const [_image, _setImage] = useState<File>()
  const [_genre, _setGenre] = useState(genre)
  const [_date, _setDate] = useState(dateOfBirth)

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, files } = event.target;
    if (name === "image") {
      if (files) {
        artist.image = files[0].name
        _setImage(files[0])
      }
    }
  };

  const handleForm = () => {
    artist.name = _name
    artist.description = _description
    artist.genre = _genre
    artist.dateOfBirth = _date
    artist.image = _image as any

    if (action === "PUT") {
      ArtistService.updateArtist(artist as IArtist)
    }
    if (action === "POST") {
      ArtistService.postNewArtist(artist as IArtist, _image as File)
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
              <Form.Control name="image" onChange={handleImageChange} type="file" />
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
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Genre: </Form.Label>
              <Form.Control
                value={_genre}
                onChange={e => _setGenre(e.target.value)}
                type="text"
                placeholder="Rock, Pop, Classic..."
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                value={_date} onChange={e => _setDate(e.target.value)} type="text"
                placeholder={"Date of birth - ( dd/mm/yyyy )"} />
            </Form.Group>
          </Col>
        </Row>
        <button onClick={handleForm}>Edit</button>
      </Form>
    </>
  );
};

