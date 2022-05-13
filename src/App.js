import logo from "./logo.svg";
import "./App.css";
import FeaturesSelector from "./Components/FeaturesSelector";
import Navigation from "./Components/Navigation";
import styledComponents from "styled-components";
import { useEffect, useState } from "react";
import DocumentViewerSection from "./Components/DocumentViewerSection";
import { useData } from "./AppContext";
import DocumentHistory from "./Components/DocumentHistory";
import { Buttons } from "./Components/EditSection";
import { parseData } from "./Components/functions";

function App() {
  const { data, setData, selectedDoc, setSelectedDoc } = useData();

  const handleShare = () => {
    alert("handle share");
  };

  const fetchData = async () => {
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:5000/view/nickghule/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedDoc(false);
  }, [data]);

  console.log(selectedDoc);

  return (
    <AppStyle>
      <Navigation
        docs={data}
        selectedDocId={selectedDoc ? selectedDoc[0]._id : false}
        onDocumentCardClick={(doc) => setSelectedDoc(doc)}
      />
      <div className="right">
        <div className="top custom-scrollbar">
          {selectedDoc && <DocumentViewerSection />}
        </div>
        <div className="bottom">
          {/* <DocumentHistory /> */}
          <Buttons onShareClick={handleShare} />
        </div>
      </div>
    </AppStyle>
  );
}

const AppStyle = styledComponents.main`
height: 100vh;
background: var(--clr-light-grey);
  display:grid;
  grid-template-columns: auto 1fr;
    .right{
      display: grid;
      grid-template-rows: 4fr 2fr;

      .top{
        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
        min-width: 800px;
        max-width: 900px;
        margin: auto;
        // border: 2px solid dodger;
        height: 60vh;
        overflow: auto;

      }
      .bottom{
        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
        max-width: 800px;
        margin-inline: auto;
        background: white;
        display: grid;
        grid-template-columns: 4fr 2fr;
        height: 30vh;
      }
    }
`;

export default App;
