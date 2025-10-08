import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1><Link to="/" style={{ textDecoration: 'none' }}>🎬 Movie Search</Link></h1>
      <Outlet />
    </div>
  );
}

export default App;
