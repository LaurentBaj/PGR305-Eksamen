import { FC, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { useParams } from "react-router";

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
    // den her og logg skjer på likt, blir derfor ikke sendt med på første trykk
    //setAlbum({name: albumName, songs: songArray, artist_id: id})

    console.log(album);
    //AlbumService.postAlbum(album)
  };

  return (
    <>
      <h1>Add new album</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Album Name</Form.Label>
          <Form.Control
            onChange={(e) => setAlbumName(e.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Song:</Form.Label>
          <Form.Control onChange={(e) => setSong(e.target.value)} type="text" />
        </Form.Group>

        <Stack className="mt-3" direction="horizontal" gap={2}>
          <Button onClick={handleSong}>Add Song</Button>
          <Button onClick={postAlbum}>Save Album</Button>
        </Stack>

        <h3>{albumName}</h3>
        <ul>
          {songArray.map((song) => {
            return <li>{song}</li>;
          })}
        </ul>
      </Form>
    </>
  );
};
