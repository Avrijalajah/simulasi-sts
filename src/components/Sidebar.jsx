import { NavLink } from 'react-router';

function Sidebar() {
  return (
    <div>
        <h2>📚 Toko Buku</h2>
        <nav>
            <NavLink to="/">Beranda</NavLink>
            <NavLink to="/books">Katalog Buku</NavLink>
            <NavLink to="/favorites">Koleksi Favorit</NavLink>
            <NavLink to="/help">Pusat Bantuan</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar
