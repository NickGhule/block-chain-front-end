import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { useData } from "./AppContext";
import { Auth } from "./Pages/Auth";
import Issuer from "./Pages/Issuer";
import Varifier from "./Pages/Varifier";

function Router(props) {
  const { user } = useData();
  console.log(user);

  const Page = () => {
    switch (user.toString()) {
      case "1":
        return <App />;
      case "2":
        return <Issuer />;
      case "3":
        return <Varifier />;
      default:
        return <App />;
    }
  };
  return (
    <Page />
    // <HashRouter>
    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route path="/issuer" element={<Issuer />} />
    //     <Route path="/varifier" element={<Varifier />} />
    //     <Route path="/auth" element={<Auth />} />
    //   </Routes>
    // </HashRouter>
  );
}

export default Router;
