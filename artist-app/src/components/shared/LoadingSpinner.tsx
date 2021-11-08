import { FC } from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner: FC = () => {
  return (
    <>
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default LoadingSpinner;
