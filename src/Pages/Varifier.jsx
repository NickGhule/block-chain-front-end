import React, { useState } from "react";
import styledComponents from "styled-components";
import Navigation from "../Components/Navigation";
import UserSection from "../Components/UserSection";

function Varifier(props) {
  const users = [
    {
      id: "123",
      name: "abs",
      doc: "This is doc",
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(users[0].id);

  return (
    <VarifierStyle>
      <Navigation
        users={users}
        selectedUserId={selectedUserId}
        onUserCardClick={(id) => setSelectedUserId(id)}
      />
      <UserSection
        user={users.find((user) => user.id == selectedUserId)}
        isVarifier
        userType={"Varifier"}
      />
    </VarifierStyle>
  );
}

export default Varifier;

const VarifierStyle = styledComponents.main`

background: var(--clr-light-grey);
  display:grid;
  grid-template-columns: auto 1fr;
    

`;
