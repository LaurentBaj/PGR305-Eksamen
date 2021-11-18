import { FC } from "react";
import { AlbumList } from "../components/Album/AlbumList";
import { ArtistItemDetails } from "../components/Artist/ArtistItemDetails";


export const ArtistDetails: FC = () => {
  return <>
    <ArtistItemDetails />
    <AlbumList />
  </>
}