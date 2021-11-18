import { ChangeEvent, FC, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { useParams } from "react-router";
import { log } from "console";



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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target;

        switch (name) {
            case "album_name":
                setAlbumName(value)
                setAlbum({ ...album, name: value });
                break;
            // case "song_name":
            //     //setAlbum({...album, songs:  });
            //     break;
        }
    };

    const postAlbum = () => {
        console.log(album)
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
                            <Form.Control name="album_name" onChange={handleChange} type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Song</Form.Label>
                    <Form.Control name="song_name" onChange={handleChange} type="text" />
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

