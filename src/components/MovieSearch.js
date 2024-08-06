import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../redux/movieSlice';
import { Link } from 'react-router-dom';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.movies);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(query));
  };

  return (
    <div className="movie-search">
      <div className="search-bar">
      {/* <form onSubmit={handleSearch}> */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
      {/* </form> */}
      </div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <Link to={`/movies/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
