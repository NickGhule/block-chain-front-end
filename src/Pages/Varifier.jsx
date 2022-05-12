import "../App.css";
import styledComponents from "styled-components";
import Navigation from "../Components/Navigation";
import { Buttons } from "../Components/EditSection";
import DocumentHistory from "../Components/DocumentHistory";
import DocumentViewerSection from "../Components/DocumentViewerSection";
import { useData } from "../AppContext";

function Varifier() {
  const { data, selectedDocId, setSelectedDocId, setData } = useData();

  const handleVarify = () => {
    alert("handle varify");
  };

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
          <Buttons isVarifier onVarify={handleVarify} />
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
        border: 2px solid tomato;
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

export default Varifier;
