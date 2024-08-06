import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from '../redux/movieSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { allMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-container">
    <div className="hero-section">
      <h1>Welcome to IMDB Movies</h1>
      <p>Explore and enjoy your favorite movies!</p>
    </div>
    <div className="movie-list">
      {allMovies.map((movie) => (
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

export default Home;
