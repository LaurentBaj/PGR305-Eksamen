import { FC } from "react";
import { IArtist } from "../../interfaces/IArtist";

const ArtistItem: FC<IArtist> = ({ id, name, description }) => {
  return (
    <article>
      <h3>Name{name}</h3>
      <p>Description{description}</p>
    </article>
  );
};

export default ArtistItem;
