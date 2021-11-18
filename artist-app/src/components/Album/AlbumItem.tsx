import { FC } from "react";
import { Card } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { IArtist } from "../../interfaces/IArtist";

export const AlbumItem: FC<IAlbum> = ({ name, songs, artist_id }) => {

    return (
        <>
            <h3>{name}</h3>
            <ul>
                {songs.map((s, key) => {
                    return <li key={key}>{s}</li>
                })}
            </ul>
        </>
    );
};

