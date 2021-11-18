import { FC, ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "../shared/Genre";

export const NewArtistForm: FC = () => {

    const [artist, setNewArtist] = useState<IArtist>({ name: "", description: "", image: "", genre: Genre.Pop, dateOfBirth: "" })
    const [newImage, setNewImage] = useState<File>()
    const [genre, setGenre] = useState<Genre>(Genre.Pop)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target
        console.log(name);

        let { value } = event.target

        switch (name) {
            case "name":
                setNewArtist({ ...artist, name: value });
                break;
            case "image":
                let { files } = event.target
                if (files) {
                    setNewArtist({ ...artist, image: files[0].name })
                    setNewImage(files[0])
                }
                break;
            case "description":
                setNewArtist({ ...artist, description: value })
                break;
            case "date":
                setNewArtist({ ...artist, dateOfBirth: value })
                break;
        }
    }

    const postNewArtist = () => {
        ArtistService.postNewArtist(artist, newImage as File)
    }

    return (
        <section>
            <div>
                <label>Name</label>
                <input name="name" onChange={handleChange} type="text" />
            </div>
            <div>
                <label>Add Picture</label>
                <input onChange={handleChange} name="image" type="file" />
            </div>
            <div>
                <label>Description</label>
                <input name="description" onChange={handleChange} type="text" />
            </div>
            <div>
                <Form.Select value={genre} onChange={e => setGenre(e.target.value as Genre)}>
                    {Object.keys(Genre).map((i) => (
                        <option>{i}</option>
                    ))}
                </Form.Select>
            </div>
            <div>
                <Form.Group className="mb-3">
                    <Form.Control
                        name="date" onChange={handleChange} type="text"
                        placeholder={"Date of birth - ( dd/mm/yyyy )"} />
                </Form.Group>
            </div>
            <input onClick={postNewArtist} type="button" value="Add artist" />
        </section>
    )
}

