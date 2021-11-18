import { FC, ChangeEvent, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "../shared/Genre";

export const NewArtistForm: FC = () => {
  const [artist, setNewArtist] = useState<IArtist>({
    name: "",
    description: "",
    image: "",
    dateOfBirth: "",
    // genre: "",
  });
  const [newImage, setNewImage] = useState<File>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    switch (name) {
      case "name":
        setNewArtist({ ...artist, name: value });
        break;
      case "image":
        let { files } = event.target;
        if (files) {
          setNewArtist({ ...artist, image: files[0].name });
          setNewImage(files[0]);
        }
        break;
      case "description":
        setNewArtist({ ...artist, description: value });
        break;
      case "date":
        setNewArtist({ ...artist, dateOfBirth: value });
        break;
      // case "genre":
      //   setNewArtist({ ...artist, genre: value });
      //   break;
    }
  };

  const postNewArtist = () => {
    ArtistService.postNewArtist(artist, newImage as File);
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Artist Name: </Form.Label>
            <Form.Control name="name" onChange={handleChange} type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Add image: </Form.Label>
            <Form.Control name="image" onChange={handleChange} type="file" />
          </Form.Group>
        </Col>
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
        {/* <Col>
          <Form.Select onChange={handleChange}>
            <option value="Classic">Classic</option>
            <option value="Pop">Pop</option>
          </Form.Select>
        </Col> */}
        <Col>
          <Form.Group className="mb-3">
            <Form.Control
              name="date"
              onChange={handleChange}
              placeholder={"Date of birth - ( dd/mm/yyyy )"}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button onClick={postNewArtist}>Submit</Button>
    </Form>
  );
};

/*
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
            <Form.Group className="mb-3">
              <Form.Control
                value={_date} onChange={e => _setDate(e.target.value)} type="text"
                placeholder={"Date of birth - ( dd/mm/yyyy )"} />
            </Form.Group>
          </Col>
        </Row>
        <button onClick={handleForm}>Edit</button>
      </Form>

*/
