import { FC, useState } from "react";
import { Form, Row, Col} from "react-bootstrap";
import { Genre } from "./Genre";

const ArtistForm: FC = () => {
  return (
    <>
      <h1>New Artist</h1>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Artist Name: </Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
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
    </>
  );
};

export default ArtistForm;
