import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams(); // imdbID
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=thewdb&i=${id}&plot=full`);
        setMovie(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy chi tiết phim:", err);
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Đạo diễn:</strong> {movie.Director}</p>
      <p><strong>Diễn viên:</strong> {movie.Actors}</p>
      <p><strong>Thể loại:</strong> {movie.Genre}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Tóm tắt:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
