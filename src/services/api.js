import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGE3NzA2MzFjN2Y5MzQyZTg1YmFhNDJiZjUxODk2MyIsIm5iZiI6MTc0MDU4NTI2OC41OTIsInN1YiI6IjY3YmYzOTM0Njc5OWM0ODJlMmVmYmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZLEBOKpiMClFVlaZobn4q1NrUjSdSWnt9Q-H63UDuk",
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    "3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `3/search/movie?query=${query.query}&include_adult=true&language=en-US&page=1`,
    options
  );
  // console.log(query.query);

  return data.results;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}?language=en-US`,
    options
  );
  console.log(data);

  return data;
};

export const fetchCastByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return data.cast;
};

export const fetchReviewsByMovieId = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return data.results;
};
