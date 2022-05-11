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

function App() {
  const { data, selectedDocId, setSelectedDocId } = useData();

  return (
    <AppStyle>
      <Navigation
        docs={data}
        selectedDocId={selectedDocId}
        onDocumentCardClick={(id) => setSelectedDocId(id)}
      />
      <div className="right">
        <div className="top">
          <DocumentViewerSection
            document={data.find((doc) => doc.id == selectedDocId)}
          />
        </div>
        <div className="bottom">
          <DocumentHistory />
          <Buttons />
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
        min-width: 800px;
        max-width: 900px;
        margin: auto;
        // border: 2px solid dodger;
        height: 60vh;
        overflow: auto;
      }
      .bottom{
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
