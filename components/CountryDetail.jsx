import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.error(err));
  }, [name]);

  if (!country) return <p>Đang tải dữ liệu...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <Link to="/">← Quay lại</Link>
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={country.name.common}
        style={{ width: '300px', margin: '1rem 0' }}
      />
      <p><strong>Dân số:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Khu vực:</strong> {country.region}</p>
      <p><strong>Thủ đô:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Ngôn ngữ:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
}

export default CountryDetail;
