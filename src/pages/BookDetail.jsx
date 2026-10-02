import { useParams } from 'react-router';

export default function BookDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Buku</h2>
      <p>Kamu sedang melihat detail untuk buku dengan ID: <strong>{id}</strong></p>
    </div>
  );
}