import { FC, useContext, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { ArtistService } from "../../services/ArtistService";
import { Col, Image, Row, Button, Modal, Stack } from "react-bootstrap";
import { AlbumList } from "../Album/AlbumList";

export const ArtistItemDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artists } = useContext(ArtistContext) as ArtistContextType;
  const [artist] = useState(artists.find((artist) => artist.id === id));
  const history = useHistory();

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // check if artists contains a image
  const containsImage = () => {
    return artist?.image
      ? `https://localhost:5001/images/${artist.image}`
      : `https://localhost:5001/images/user_placeholder.png`;
  };

  const deleteArtist = (id: string) => {
    ArtistService.deleteArtist(id);
    history.push("/artists");
  };

  return (
    <>
      <Stack className="mt-3" direction="horizontal" gap={2}>
        <Button
          onClick={() => history.push(`/artist-edit/${artist?.id}`)}
          variant="warning"
        >
          Edit Artist
        </Button>
        <Button onClick={handleShow} variant="danger">
          Delete Artist
        </Button>
      </Stack>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Wooow, are you sure you want to delete <b>{artist?.name}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteArtist(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="m-5 text-center">
        <Col>
          <Image
            className={"layeredbox"}
            style={{ maxWidth: "20rem" }}
            src={containsImage()}
          />
        </Col>
      </Row>
      <Row>
        <h1>{artist?.name}</h1>
        <p>{artist?.description}</p>
      </Row>
      <Row>
        <h2>Genre: {artist?.genre}</h2>
        <p>
          Date of birth: <b>{artist?.dateOfBirth}</b>
        </p>
      </Row>

      <AlbumList id={id} name={artist?.name as string} description={artist?.description as string} />
      <Link to={`/newAlbum/${id}`}><Button>Add Album</Button></Link>
    </>
  );
};
