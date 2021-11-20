import { FC, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { TrashFill } from "react-bootstrap-icons";

export const AlbumItem: FC<IAlbum> = ({ id, name, songs }) => {
  const deleteAlbum = (id: string) => {
    AlbumService.deleteAlbum(id);
    setShow(false);
  };

  // modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h3>
        {name}
        <Button onClick={handleShow} variant="text">
          <TrashFill color="red" />
        </Button>
      </h3>

      <ul>
        {songs.map((s, key) => {
          return <li key={key}>{s}</li>;
        })}
      </ul>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the album <b>{name}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteAlbum(id as string)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
