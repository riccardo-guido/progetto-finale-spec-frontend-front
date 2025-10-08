import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <h1>📱 Smartphone Comparator</h1>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Preferiti
          </NavLink>
          <NavLink
            to="/compare"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Comparatore
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
