import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!search) return;
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=thewdb&s=${search}`);
      if (res.data.Search) {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        alert("Không tìm thấy phim nào.");
      }
    } catch (err) {
      console.error("Lỗi gọi API:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên phim..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '1rem' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
