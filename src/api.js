import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GAMadwUA1tqoM6xuAjsTNxTK5Lq8nDHHTgiAg1edPG8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;