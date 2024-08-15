import axios from "axios";

const MoviesBaseUrl = "https://api.themoviedb.org/3";
const MoviesApiKey = "19fd9db47f6e5c9af108bc950a086098";
const MoviesBygenreUrl ="https://api.themoviedb.org/3/discover/movie?api_key=19fd9db47f6e5c9af108bc950a086098"
// https://api.themoviedb.org/3/trending/all/day?api_key=19fd9db47f6e5c9af108bc950a086098

// mengambil data dari api menggunakan axios
const getTrendingMovies = axios.get(`${MoviesBaseUrl}/trending/all/day?api_key=${MoviesApiKey}`);
const getMoviesByGenre =(id) => axios.get(MoviesBygenreUrl+"&with_genres="+id)
const SearchMovies = (input) => axios.get(`${MoviesBaseUrl}/search/movie?api_key=${MoviesApiKey}&query=${input}`);
export default {getTrendingMovies, getMoviesByGenre, MoviesApiKey,SearchMovies};