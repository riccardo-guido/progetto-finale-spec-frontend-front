import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import Compare from "./pages/Compare";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>📱 Smartphone Comparator</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/favorites">Preferiti</Link>
            <Link to="/compare">Comparatore</Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
