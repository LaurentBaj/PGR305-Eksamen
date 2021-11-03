import axios from "axios";
import { IArtist } from "../interfaces/IArtist";

export const ArtistService = (function () {
  const urlToArtistController = "https://localhost:5001/artist";

  const getAll = async () => {
    const result = await axios.get(urlToArtistController);
    return result.data;
  };

  const postNewArtist = async (newArtist: IArtist) => {
    const result = await axios.post(urlToArtistController, newArtist);
    return result.data;
  };

  return {
    getAll,
    postNewArtist,
  };
})();
