import { Routes, Route } from "react-router-dom";

import Accueil from "./routes/accueil/Accueil";
import Navigation from "./routes/navigation/Navigation";
import Profil from "./routes/profil/Profil";
import Reglages from "./routes/reglage/Reglages";
import Communaute from "./routes/communaute/Communaute";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Accueil />} />
        <Route path="profil" element={<Profil />} />
        <Route path="reglages" element={<Reglages />} />
        <Route path="communaute" element={<Communaute />} />
      </Route>
    </Routes>
  );
}

export default App;
