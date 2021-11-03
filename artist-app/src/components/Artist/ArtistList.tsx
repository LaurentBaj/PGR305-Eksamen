import { FC, useContext } from "react";
import { IArtist } from "../../interfaces/IArtist";
import ArtistItem from "./ArtistItem";
import { ArtistContext } from "../../contexts/ArtistContext";
import { ArtistContextType } from "../../types/ArtistContextType";

const ArtistList: FC = () => {
  const { artists } = useContext(ArtistContext) as ArtistContextType;

  const createArtistList = () => {
    return artists.map((artist: IArtist, key: number) => {
      return (
        <>
          <ArtistItem
            key={key}
            id={artist.id}
            name={artist.name}
            description={artist.description}
          />
        </>
      );
    });
  };

  return <section>{createArtistList()}</section>;
};

export default ArtistList;
