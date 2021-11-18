import { FC, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import LoadingSpinner from "../shared/LoadingSpinner";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumItem } from "./AlbumItem";

export const AlbumList: FC<IArtist> = ({ id, name, description }) => {
    const { albums, loading, artists } = useContext(ArtistContext) as ArtistContextType;
    const [album] = useState(albums.filter(a => a.artist_id === id))

    return <>
        <h2>Albums</h2>
        {
            album.length > 0 ?
                album.map((a: IAlbum, key: number) => {
                    return <AlbumItem name={a.name} songs={a.songs} artist_id={id as string} />
                })
                : <p>There are currently no albums. Want to add one?</p>
        }
    </>
};

