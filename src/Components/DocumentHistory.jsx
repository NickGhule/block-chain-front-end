import React from "react";
import styledComponents from "styled-components";
import Stepper from "./Stepper";

function DocumentHistory(props) {
  const history = ["20 sep 2020", "20 sep 2020", "20 sep 2020"];

  return (
    <DocumentHistoryStyle>
      <div className="history-title">Edit History</div>
      <Stepper steps={history} />
    </DocumentHistoryStyle>
  );
}

export default DocumentHistory;

const DocumentHistoryStyle = styledComponents.section`
    padding: 1rem 2rem;
    .history-title{
      padding-bottom: 1rem ;
      font-size: 1.2rem;
      font-weight: 600;
    }

`;
