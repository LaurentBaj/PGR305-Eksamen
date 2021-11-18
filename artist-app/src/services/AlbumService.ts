import axios from "axios";
import { IAlbum } from "../interfaces/IAlbum";
import { IArtist } from "../interfaces/IArtist";

export const AlbumService = (function () {
    const urlToAlbumService = "https://localhost:5001/Album";

    const getAll = async () => {
        const result = await axios.get(urlToAlbumService);
        return result.data as IAlbum[];
    };

    // const deleteArtist = (id: string) => {
    //     axios.delete(urlToAlbumService.concat("/" + id))
    // }

    // const updateArtist = (artist: IArtist) => {
    //     axios.put(urlToAlbumService.concat("/" + artist.id), artist)
    // }


    return {
        getAll
    };
})();
