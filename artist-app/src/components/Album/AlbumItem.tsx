import { FC } from "react";
import { Button } from "react-bootstrap";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumService } from "../../services/AlbumService";
import { TrashFill } from "react-bootstrap-icons";

export const AlbumItem: FC<IAlbum> = ({ id, name, songs, artist_id }) => {
  const deleteAlbum = (id: string) => {
    AlbumService.deleteAlbum(id);
  };

  return (
    <>
      <h3>
        {name}
        <Button onClick={() => deleteAlbum(id as string)} variant="text">
          <TrashFill color="red" />
        </Button>
      </h3>

      <ul>
        {songs.map((s, key) => {
          return <li key={key}>{s}</li>;
        })}
      </ul>
    </>
  );
};
