import React, { useState, useEffect } from "react";
import axios from "axios";

const TMDB_API_KEY = "19fd9db47f6e5c9af108bc950a086098"; // Replace with your actual API key
const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}`;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null); // To store API error messages

  const fetchMovies = async () => {
    try {
      const response = await axios.get(TMDB_SEARCH_URL + `&query=${search}`);
      setMovieList(response.data.results);
      setError(null);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.response?.data?.message || "An error occurred."); // Provide user-friendly error message
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const sortedMovies = movieList.slice().sort((a, b) => {
    const yearA = parseInt(a.release_date.split("-")[0]);
    const yearB = parseInt(b.release_date.split("-")[0]);
    return yearB - yearA; // Newest to oldest
  });

  return (
    <form className="max-w-md mx-auto flex flex-col overflow-y-hidden">
      <label
        value={search}
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative overflow-visible z-30">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Your Movies"
          required
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={fetchMovies}
        >
          Search
        </button>
        <ul>
          {sortedMovies.map(
            (movie, index) =>
              index < 7 && (
                <li
                  key={movie.id}
                  className="border-b border-gray-300 bg-zinc-600  p-3 text-white relative"
                >
                  {movie.title} ({movie.release_date.split("-")[0]})
                </li>
              )
          )}
        </ul>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </form>
  );
};

export default SearchBar;
