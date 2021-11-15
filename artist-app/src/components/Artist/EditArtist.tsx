import { FC, useState, useContext } from "react";
import { useParams } from "react-router";
import { EditArtistForm } from "./EditArtistForm";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { Genre } from "../shared/Genre";

export const EditArtist: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { artists, } = useContext(ArtistContext) as ArtistContextType;
    const [artist] = useState(artists.find((artist) => artist.id === id));



    return (
        <div>
            <h1>{artist?.name}</h1>
        </div>
    )
}


/*
 <EditArtistForm
                name={artist?.name as string}
                description={artist?.description as string}
                genre={artist?.genre as Genre}
                image={artist?.image}
                album={artist?.album}
            />

*/