import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function RecordCard({ record }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some((fav) => fav.id === record.id);

  return (
    <div className="card">
      <img src={record.image} alt={record.title} className="card-image" />

      <h3>{record.title}</h3>
      <p>{record.category}</p>
      <Link to={`/detail/${record.id}`}>Dettagli</Link>
      <button onClick={() => toggleFavorite(record)}>
        {isFav ? "💔 Rimuovi" : "❤️ Preferito"}
      </button>
    </div>
  );
}
