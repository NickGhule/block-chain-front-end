import logo from "./logo.svg";
import "./App.css";
import FeaturesSelector from "./Components/FeaturesSelector";
import Navigation from "./Components/Navigation";
import styledComponents from "styled-components";
import { useEffect, useState } from "react";
import UserSection from "./Components/UserSection";

function App() {
  const docs_temp = [
    { name: "chaitanya", id: "2332432", doc: "this is some doc" },
    { name: "omkar", id: "233e432", doc: "this is some doc" },
    { name: "abhi", id: "2331232", doc: "this is some doc" },
    { name: "nick", id: "2336432", doc: "this is some doc" },
    { name: "nick", id: "2336432", doc: "this is some doc" },
    { name: "nick", id: "2336432", doc: "this is some doc" },
    { name: "nick", id: "233123132", doc: "this is some doc" },
    { name: "nick", id: "23323532432", doc: "this is some doc" },
  ];

  const [docs, setDocs] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("2332432");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/docs").then((response) =>
      console.log(response)
    );
    setDocs(docs_temp);
  }, []);

  return (
    <AppStyle>
      {docs.length > 0 && (
        <>
          <Navigation
            users={docs}
            selectedUserId={selectedUserId}
            onUserCardClick={(id) => setSelectedUserId(id)}
          />
          <UserSection
            user={
              docs.find((user) => user.id == selectedUserId)
                ? docs.find((user) => user.id == selectedUserId)
                : {
                    name: "name",
                    doc: "doc",
                  }
            }
            userType={"Viewer"}
          />
        </>
      )}
    </AppStyle>
  );
}

const AppStyle = styledComponents.main`
background: var(--clr-light-grey);
  display:grid;
  grid-template-columns: auto 1fr;
    
`;

export default App;
