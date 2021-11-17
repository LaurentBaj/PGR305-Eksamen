import { ChangeEvent, FC, useState } from "react";
import { useHistory } from "react-router";
import { Form, Row, Col } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "./Genre";
import DatePicker from "react-datepicker";


export const ArtistForm: FC<IArtist> = ({ id, name, description, action, image, genre, dateOfBirth }) => {
  const artist = { id, name, description, image, genre, dateOfBirth }
  const history = useHistory()

  const [_name, _setName] = useState(name)
  const [_description, _setDescription] = useState(description)
  const [_image, _setImage] = useState(image)
  const [_genre, _setGenre] = useState<Genre>(genre as Genre)
  const [startDate, setStartDate] = useState(new Date());


  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, files } = event.target;
    if (name === "image") {
      if (files) {
        artist.image = files[0].name
        _setImage(files[0].name)
      }
    }
  };


  const handleForm = () => {
    artist.name = _name
    artist.description = _description
    artist.image = _image
    artist.genre = _genre
    artist.dateOfBirth = startDate


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
            <Form.Select value={_genre} onChange={e => _setGenre(e.target.value as Genre)} >
              {Object.keys(Genre).map((i) => (
                <option>{i}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date as Date)} />
          </Col>
        </Row>
        <button onClick={handleForm}>Edit</button>
      </Form>
    </>
  );
};

