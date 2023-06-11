import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_SECRET = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_SECRET,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};
