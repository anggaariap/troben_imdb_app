import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../redux/movieSlice';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const { popular, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='container'>
      <h1 className="section-title">Popular</h1>
        <div className="movie-list">
          {popular.map((movie) => (
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

export default MovieList;
