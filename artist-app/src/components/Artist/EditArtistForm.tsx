import { FC } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";

import { Genre } from "../shared/Genre";

export const EditArtistForm: FC<IArtist> = ({ name, description }) => {

  return (
    <>
      <h1>{name}</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Artist Name: </Form.Label>
              <Form.Control value={name} type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control name="image" type="file" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control value={description} name="description" as="textarea" rows={3}
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
      </Form>
      <Button>Save</Button>
    </>
  );
};

