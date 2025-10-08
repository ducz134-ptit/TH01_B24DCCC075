import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flags,population,region')
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Danh sách quốc gia</h1>
      <input
        type="text"
        placeholder="Tìm kiếm quốc gia..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryList;
