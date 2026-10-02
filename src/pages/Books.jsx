import { Link } from 'react-router';

export default function Books() {
  return (
    <div>
      <h2>Katalog Buku</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>📖 <Link to="/books/1">Bumi</Link></li>
        <li>📖 <Link to="/books/2">Laskar Pelangi</Link></li>
        <li>📖 <Link to="/books/3">Sang Pemimpi</Link></li>
      </ul>
    </div>
  );
}