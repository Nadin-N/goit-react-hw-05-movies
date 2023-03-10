import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1deae1a36202e3ac8c29219a3d453e0f';

export const fetchPopularMovies = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieActors = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
export const fetchMovieByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};
