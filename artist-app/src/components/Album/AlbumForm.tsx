import { FC, useState } from "react";
import { Form, Button, Stack, Modal } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { useParams } from "react-router";
import { AlbumService } from "../../services/AlbumService";
import { Link } from "react-router-dom";

export const AlbumForm: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<IAlbum>({
    name: "",
    songs: [],
    artist_id: id,
  });
  const [songArray, setsongArray] = useState<string[]>([]);
  const [song, setSong] = useState<string>("");
  const [albumName, setAlbumName] = useState<string>("");

  const handleSong = () => {
    setsongArray([...songArray, song]);
    setSong("");
  };

  const postAlbum = () => {
    AlbumService.postAlbum(album);
    setSong("");
    setAlbumName("");
    setsongArray([]);
  };

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    AlbumService.postAlbum(album);
    setSong("");
    setAlbumName("");
    setsongArray([]);
    setShow(false);
  };
  const handleShow = () => {
    setAlbum({ name: albumName, artist_id: id, songs: songArray });
    setShow(true);
  };

  return (
    <>
      <h1>Add new album</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Album Name</Form.Label>
          <Form.Control
            value={albumName}
            onChange={(e) => setAlbumName(e.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Song:</Form.Label>
          <Form.Control
            value={song}
            onChange={(e) => setSong(e.target.value)}
            type="text"
          />
        </Form.Group>

        <Stack className="mt-3" direction="horizontal" gap={2}>
          <Button onClick={handleSong}>Add Song</Button>
          <Button onClick={handleShow}>Save Album</Button>
        </Stack>

        <h3>{albumName}</h3>
        <ul>
          {songArray.map((song) => {
            return <li>{song}</li>;
          })}
        </ul>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Album</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to add another album?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Yes
          </Button>
          <Link to={`/artist-details/${id}`}>
            <Button variant="danger" onClick={postAlbum}>
              No
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
