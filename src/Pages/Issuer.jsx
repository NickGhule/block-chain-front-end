import React from "react";
import styledComponents from "styled-components";
import UserForm from "../Components/UserForm";

function Issuer(props) {
  const issueDocument = (values) => {
    console.log(values);
    console.table(values.values);
  };
  return (
    <IssuerStyle>
      <UserForm onSubmit={issueDocument} />
    </IssuerStyle>
  );
}

export default Issuer;

const IssuerStyle = styledComponents.main`
    
 margin: auto;
 width: fit-content;

`;
