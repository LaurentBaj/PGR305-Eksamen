import { FC, ChangeEvent, useState } from "react";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistService } from "../../services/ArtistService";
import { Genre } from "../shared/Genre";


export const NewArtistForm: FC = () => {

    const [artist, setNewArtist] = useState<IArtist>({ name: "", description: "", image: "", genre: Genre.Pop, dateOfBirth: "" })
    const [newImage, setNewImage] = useState<File>()

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
            <input onClick={postNewArtist} type="button" value="Add artist" />
        </section>
    )
}

