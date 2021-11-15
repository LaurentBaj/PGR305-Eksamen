import { FC } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { Genre } from "../shared/Genre";

export const EditArtistForm: FC = () => {

  return (
    <>
      <h1>New Artist</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Artist Name: </Form.Label>
              <Form.Control name="name" type="text" />
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
          <Form.Control
            name="description"

            as="textarea"
            rows={3}
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
            <Form.Control name="date" placeholder="Date of birth" />
          </Col>
        </Row>
      </Form>
      <Button>Save</Button>
    </>
  );
};

