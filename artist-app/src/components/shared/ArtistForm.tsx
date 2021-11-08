import { FC } from "react";
import { Form, Row, Col} from "react-bootstrap";

const ArtistForm: FC = () => {
  return (
    <>
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
            <option>Genre</option>
            <option>Rock</option>
            <option>Jazz</option>
            <option>Classical</option>
            <option>Rap</option>
            <option>Hip Hop</option>
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
