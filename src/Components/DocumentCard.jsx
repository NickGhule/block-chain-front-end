import React from "react";
import styledComponents from "styled-components";

function DocumentCard({ doc, isSelected, onUserCardClick }) {
  console.log(doc);
  return (
    <DocumentCardStyle
      style={{
        border: isSelected ? "2px solid blue" : "2px solid transparent",
      }}
      onClick={() => onUserCardClick(doc)}
    >
      <div className="name">{doc[0].documentName}</div>
    </DocumentCardStyle>
  );
}

const DocumentCardStyle = styledComponents.div`
    

background-color: white;
border-radius: 8px;
padding: 2rem;
margin: 0.5rem;
color: black;
cursor: pointer;

.name{
    font-weight: 400;

}


`;

export default DocumentCard;
