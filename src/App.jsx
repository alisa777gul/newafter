import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Teachers from "./pages/Teachers.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
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
