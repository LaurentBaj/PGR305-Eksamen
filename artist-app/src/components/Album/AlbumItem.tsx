import { FC } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { ArtistService } from "../../services/ArtistService";

export const AlbumItem: FC<IAlbum> = ({ id, name, songs, artist_id }) => {
  const deleteAlbum = (id: string) => {
    AlbumService.deleteAlbum(id);
  };

  return (
    <>
      <h3>{name}</h3>
      <Button onClick={() => deleteAlbum(id as string)} variant="danger">
        Delete album
      </Button>
      <ul>
        {songs.map((s, key) => {
          return <li key={key}>{s}</li>;
        })}
      </ul>
    </>
  );
};
