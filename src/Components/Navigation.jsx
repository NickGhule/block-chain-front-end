import React from "react";
import styledComponents from "styled-components";
import DocumentCard from "./DocumentCard";

function Navigation({ docs, selectedDocId, onDocumentCardClick }) {
  return (
    <NavigationStyle>
      {docs.map((doc) => (
        <DocumentCard
          key={doc.id}
          doc={doc}
          isSelected={doc.id == selectedDocId}
          onUserCardClick={onDocumentCardClick}
        />
      ))}
    </NavigationStyle>
  );
}

export default Navigation;

const NavigationStyle = styledComponents.nav`
 width: 300px;
 color: white;
 height: 100vh;
 overflow: auto;

`;
