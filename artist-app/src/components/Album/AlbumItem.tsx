import { FC } from "react";
import { IAlbum } from "../../interfaces/IAlbum";

export const AlbumItem: FC<IAlbum> = ({ name, songs, artist_id }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>
        {songs.map((s, key) => {
          return <li key={key}>{s}</li>;
        })}
      </ul>
    </>
  );
};
