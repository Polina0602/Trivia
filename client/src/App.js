import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import HeaderContent from "./components/header/header";
import { FrontPage } from "./components/pages/frontPage";
import Registration from "./components/pages/registrationPage";
import Location from "./components/pages/locationPage";
import { Routes, Route, useRoutes } from "react-router-dom";
import Questions from "./components/routes/Questions";
import Qustions1 from "./components/routes/Qustions1"
import Results from "./components/pages/resultsPage"


function App() {
  const { t } = useTranslation(); //translation

  return (
    <div className="App">
      <HeaderContent />

      <Routes>   
        <Route path="/" element={<FrontPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Qustions1" element={<Qustions1></Qustions1>} />
        <Route path="/Results" element={<Results />} />

      </Routes>
    </div>
  );
}

export default App;
