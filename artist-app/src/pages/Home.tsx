import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import image from "../assets/home-image.png";

const Home: FC = () => {
  return (
    <>
      <Row>
        <Col className="text-center mt-5">
          <h3>
            Welcome to Artist<span style={{ color: "orange" }}>Hub</span>
          </h3>
          <p>Save all your favourite artists and their albums in one place</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Image src={image} alt={image} fluid />
        </Col>
      </Row>
    </>
  );
};

export default Home;
