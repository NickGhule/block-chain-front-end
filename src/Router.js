import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Issuer from "./Pages/Issuer";
import Varifier from "./Pages/Varifier";

function Router(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/issuer" element={<Issuer />} />
        <Route path="/varifier" element={<Varifier />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
