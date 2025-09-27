import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import FavoriteButton from "./FavoritesButton";

export default function RecordCard({ record }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFav = favorites.some((fav) => fav.id === record.id);

  return (
    <div className="card">
      <img src={record.image} alt={record.title} className="card-image" />

      <h3>{record.title}</h3>
      <p>{record.category}</p>
      <div className="card-footer">
        <Link to={`/detail/${record.id}`} className="details-link">
          Dettagli
        </Link>
        <FavoriteButton isFav={isFav} onToggle={() => toggleFavorite(record)} />
      </div>
    </div>
  );
}
