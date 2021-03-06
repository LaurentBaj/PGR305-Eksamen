import { FC, useContext, useState } from "react";
import { IArtist } from "../../interfaces/IArtist";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";
import { IAlbum } from "../../interfaces/IAlbum";
import { AlbumItem } from "./AlbumItem";
import { Col } from "react-bootstrap";

export const AlbumList: FC<IArtist> = ({ id }) => {
  const { albums } = useContext(ArtistContext) as ArtistContextType;
  const [album] = useState(albums.filter((a) => a.artist_id === id));

  return (
    <>
      <h2 style={{ color: "#0d6efd" }} className="mt-5">Albums</h2>
      {album.length > 0 ? (
        album.map((a: IAlbum, key: number) => {
          return (
            <>
              <Col>
                <AlbumItem
                  key={key}
                  id={a.id}
                  name={a.name}
                  songs={a.songs}
                  artist_id={id as string} />
              </Col>
            </>
          );
        })
      ) : (
        <p>
          We could not find any albums. Want to add one? Click the add album
          button.
        </p>
      )}
    </>
  );
};
