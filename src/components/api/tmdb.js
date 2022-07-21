import axios from "axios";

const API_KEY = "7f80f80c2a01af9021c10c72f8b38f10";
const baseUrl = "https://api.themoviedb.org/3/";
const baseUrlDetail = "https://api.themoviedb.org/3/movie/";

export const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export const tmdbDetail = async (id) => {
  return await axios.get(baseUrlDetail + id, {
    params: {
      api_key: API_KEY,
    },
  });
};
