import { FC, useState, useContext } from "react";
import { useParams } from "react-router";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";
import { ArtistForm } from "../components/shared/ArtistForm";

export const EditArtist: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { artists } = useContext(ArtistContext) as ArtistContextType;
    const [artist] = useState(artists.find((artist) => artist.id === id));

    return (
        <div>
            <ArtistForm
                id={artist?.id as string}
                name={artist?.name as string}
                description={artist?.description as string}
                image={artist?.image}
                action={"PUT"}
            />
        </div>
    )
}
