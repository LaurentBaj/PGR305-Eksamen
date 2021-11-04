import { FC, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ArtistItem from "../components/Artist/ArtistItem";
import { ArtistContext } from "../contexts/ArtistContext";
import { IArtist } from "../interfaces/IArtist";
import { ArtistContextType } from "../types/ArtistContextType";


export const ArtistDetail: FC = () => {
  const {name} = useParams<{ name: string }>();
  const {artists} = useContext(ArtistContext) as ArtistContextType
  
  

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};


