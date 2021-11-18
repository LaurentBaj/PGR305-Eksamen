import { FC, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { useParams } from "react-router";



export const AlbumForm: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [album, setAlbum] = useState<IAlbum>(
        {
            name: "",
            songs: [],
            artist_id: ""
        }
    )
    const [songArray, setsongArray] = useState<string[]>([])
    const [song, setSong] = useState<string>("")
    const [albumName, setAlbumName] = useState<string>("")



    const handleSong = () => {
        setsongArray([...songArray, song])
        setSong("")
    }

    const postAlbum = () => {
        setAlbum({ ...album, name: albumName })
        setAlbum({ ...album, songs: songArray })
        setAlbum({ ...album, artist_id: id })

        console.log(album);

        //AlbumService.postAlbum(album)
    }

    return (
        <>
            <h1>Add new album</h1>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Album Name: </Form.Label>
                            <Form.Control value={albumName} onChange={e => setAlbumName(e.target.value)} type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Song</Form.Label>
                    <Form.Control value={song} onChange={e => setSong(e.target.value)} type="text" />
                    <Button onClick={handleSong}>Add Song</Button>
                    <br />
                    <Button onClick={postAlbum}>Save Album</Button>
                </Form.Group>
                <br></br>
                <Row>
                    <h3>{albumName}</h3>
                    <ul>
                        {songArray.map(s => {
                            return <li>{s}</li>
                        })}
                    </ul>
                </Row>
            </Form>
        </>
    );
};

