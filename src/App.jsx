import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Perfil from "./pages/Perfil.jsx";
import PaginaNotFound from "./pages/PaginaNotFound.jsx";
import Registrio from "./pages/Registro.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Routes>
      {/* path: ruta de la página que se va a mostrar */}
      {/* element: componente que se va a mostrar en la ruta */}
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Registro" element={<Registrio />} />
      <Route path="/Index" element={<Index />} />
      <Route path="/*" element={<PaginaNotFound />} />
    </Routes>
  );
}

export default App;
