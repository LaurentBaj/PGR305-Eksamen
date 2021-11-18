import { FC } from "react";
import { Form, Row, Col } from "react-bootstrap";



export const AlbumForm: FC = () => {

    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Album Name: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Songs</Form.Label>
                    <Form.Control as="textarea" rows={3}
                    />
                </Form.Group>
                <br></br>
                <Row>
                </Row>
            </Form>
        </>
    );
};

