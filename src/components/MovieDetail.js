import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieById } from '../redux/movieSlice';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    selectedMovie && (
    <div className='container'>
      <div className="movie-detail">
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <div className="movie-detail-content">
          <h2>{selectedMovie.Title}</h2>
          <p><span>Year:</span> {selectedMovie.Year}</p>
          <p><span>Genre:</span> {selectedMovie.Genre}</p>
          <p><span>Director:</span> {selectedMovie.Director}</p>
          <p><span>Actors:</span> {selectedMovie.Actors}</p>
          <p><span>Plot:</span> {selectedMovie.Plot}</p>
          <div className="rating">
            <i className="fas fa-star"></i>
            <span>Rating: {selectedMovie.imdbRating}</span>
          </div>
        </div>
      </div>
      <footer className="footer">
          <p>&copy; 2024 IMDB Movies by Angga. All rights reserved.</p>
        </footer>
      </div>
    )
  );
};

export default MovieDetail;
