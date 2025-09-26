import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="container">
      <div className="favorites">
        <h2>I tuoi preferiti</h2>
        {favorites.length > 0 ? (
          <div className="grid">
            {favorites.map((record) => (
              <div key={record.id} className="card">
                <img
                  src={record.image}
                  alt={record.title}
                  className="card-image"
                />
                <h3>{record.title}</h3>
                <p>{record.category}</p>
                <Link to={`/detail/${record.id}`}>Dettagli</Link>
                <button onClick={() => toggleFavorite(record)}>
                  💔 Rimuovi
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-message"> La tua lista preferiti è vuota.</p>
        )}
      </div>
    </div>
  );
}
