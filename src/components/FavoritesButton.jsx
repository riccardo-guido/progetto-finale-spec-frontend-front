export default function FavoriteButton({ isFav, onToggle }) {
  return (
    <button
      className={`fav-button ${isFav ? "active" : ""}`}
      onClick={onToggle}
      aria-label="Aggiungi ai preferiti"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFav ? "#e63946" : "none"}
        stroke="#e63946"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="heart-icon"
      >
        <path d="M20.8 4.6c-1.5-1.4-3.9-1.4-5.4 0L12 8l-3.4-3.4c-1.5-1.4-3.9-1.4-5.4 0s-1.4 3.9 0 5.4L12 20l8.8-10c1.4-1.5 1.4-3.9 0-5.4z" />
      </svg>
    </button>
  );
}
