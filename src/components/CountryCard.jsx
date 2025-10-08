import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <Link
      to={`/country/${country.name.common}`}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '200px',
        padding: '1rem',
        textDecoration: 'none',
        color: 'black',
      }}
    >
      <img
        src={country.flags.svg}
        alt={country.name.common}
        style={{ width: '100%', height: '120px', objectFit: 'cover' }}
      />
      <h3>{country.name.common}</h3>
      <p><strong>Dân số:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Khu vực:</strong> {country.region}</p>
    </Link>
  );
}

export default CountryCard;
