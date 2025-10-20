import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Teachers from "./pages/Teachers.jsx";

function App() {
  return (
    <>
      <header style={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
        <nav style={{ display: "flex", gap: "16px" }}>
          <Link to="/">Home</Link>
          <Link to="/teachers">Teachers</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
