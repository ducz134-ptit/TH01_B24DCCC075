import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      margin: '1rem',
      padding: '1rem',
      width: '200px',
      textAlign: 'center'
    }}>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300'} alt={movie.Title} style={{ width: '100%' }} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
