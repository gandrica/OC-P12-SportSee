import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import InvalidResolution from "./components/invalidResolution/InvalidResolution";
import Accueil from "./routes/accueil/Accueil";
import Navigation from "./routes/navigation/Navigation";
import Profil from "./routes/profil/Profil";
import Reglages from "./routes/reglages/Reglages";
import Communaute from "./routes/communaute/Communaute";
import PageNotFound from "./routes/notFound/PageNotFound";
import ServiceIndisponible from "./routes/serviceIndisponible/ServiceIndisponible";

function App() {
  const [hasValidResolution, setHasValidResolution] = useState(
    window.innerWidth >= 1024 && window.innerHeight >= 780,
  );

  useEffect(() => {
    const handleResize = () => {
      setHasValidResolution(
        window.innerWidth >= 1024 && window.innerHeight >= 780,
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!hasValidResolution) {
    return <InvalidResolution />;
  }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Accueil />} />
        <Route path="profil" element={<Profil />} />
        <Route path="reglages" element={<Reglages />} />
        <Route path="communaute" element={<Communaute />} />
        <Route path="service-indisponible" element={<ServiceIndisponible />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
