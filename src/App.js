import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Nosotros from "./pages/Nosotros"
import Explora from "./pages/Explora"
import Opina from "./pages/Opina"
import Comunidad from "./pages/Comunidad"
import Socios from "./pages/Socios"
import NoPage from "./pages/NoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="explora" element={<Explora />} />
          <Route path="opina" element={<Opina />} />
          <Route path="comunidad" element={<Comunidad />} />
          <Route path="socios" element={<Socios />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;