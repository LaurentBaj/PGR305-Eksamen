import axios from "axios";
import { IAlbum } from "../interfaces/IAlbum";
import { IArtist } from "../interfaces/IArtist";

export const AlbumService = (function () {
    const urlToAlbumController = "https://localhost:5001/Album";

    const getAll = async () => {
        const result = await axios.get(urlToAlbumController);
        return result.data as IAlbum[];
    };


    const postAlbum = (album: IAlbum) => {
        axios.post(urlToAlbumController, album)
    }

    return {
        getAll,
        postAlbum
    };
})();
