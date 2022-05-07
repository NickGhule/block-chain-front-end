import React from "react";
import styledComponents from "styled-components";
import FeaturesSelector from "./FeaturesSelector";

function UserForm({ onSubmit }) {
  return (
    <UserFormStyle>
      <FeaturesSelector onSubmit={onSubmit} />
    </UserFormStyle>
  );
}

export default UserForm;

const UserFormStyle = styledComponents.div``;
