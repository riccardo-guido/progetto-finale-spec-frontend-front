import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>La lista dei preferiti è vuota.</p>;
  }

  return (
    <div className="favorites">
      <h2>I tuoi preferiti</h2>
      <div className="grid">
        {favorites.map((record) => (
          <div key={record.id} className="card">
            <h3>{record.title}</h3>
            <p>{record.category}</p>
            <Link to={`/detail/${record.id}`}>Dettagli</Link>
            <button onClick={() => toggleFavorite(record)}>💔 Rimuovi</button>
          </div>
        ))}
      </div>
    </div>
  );
}
