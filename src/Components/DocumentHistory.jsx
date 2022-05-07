import React from "react";
import styledComponents from "styled-components";

function DocumentHistory(props) {
  const history = ["20 sep 2020", "20 sep 2020", "20 sep 2020"];

  return (
    <DocumentHistoryStyle>
      {history.map((date) => (
        <div className="history">{date}</div>
      ))}
    </DocumentHistoryStyle>
  );
}

export default DocumentHistory;

const DocumentHistoryStyle = styledComponents.section`

 .history{
     margin: 1rem;
 }

`;
