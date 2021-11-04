import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../contexts/ArtistContext";
import { ArtistContextType } from "../types/ArtistContextType";


export const ArtistView: FC = () => {
  const {name} = useParams<{ name: string }>();
  const {artists} = useContext(ArtistContext) as ArtistContextType
  const artist = artists.find(a => a.name === name)

  return (
    <>
      <h1>{artist?.name}</h1> 
      <p>{artist?.description}</p>    
    </>
  );
};


