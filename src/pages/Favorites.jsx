import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RecordCard from "../components/RecordCard";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <div className="favorites">
        <h2>I tuoi preferiti</h2>
        {favorites.length > 0 ? (
          <div className="grid">
            {favorites.map((record) => (
              <RecordCard key={record.id} record={record} />
            ))}
          </div>
        ) : (
          <p className="empty-message"> La tua lista preferiti è vuota.</p>
        )}
      </div>
    </div>
  );
}
