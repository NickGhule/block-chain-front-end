import React from "react";
import styledComponents from "styled-components";
import Stepper from "./Stepper";

function DocumentHistory(props) {
  const history = ["20 sep 2020", "20 sep 2020", "20 sep 2020"];

  return (
    <DocumentHistoryStyle>
      <Stepper steps={history} />
    </DocumentHistoryStyle>
  );
}

export default DocumentHistory;

const DocumentHistoryStyle = styledComponents.section`
    padding: 2rem;

`;
