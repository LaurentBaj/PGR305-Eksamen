import axios from "axios";
import { IArtist } from "../interfaces/IArtist";

export const ArtistService = (function () {
  const urlToArtistController = "https://localhost:5001/artist";
  const urlToImageUploadController =
    "https://localhost:5001/ImageUpload/SaveImage";

  const getAll = async () => {
    const result = await axios.get(urlToArtistController);
    return result.data as IArtist[];
  };

  const postNewArtist = (newArtist: IArtist, image: File) => {
    let formData = new FormData();
    formData.append("file", image);
    axios.post(urlToArtistController, newArtist);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return {
    getAll,
    postNewArtist,
  };
})();
