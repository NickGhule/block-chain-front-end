import React from "react";
import styledComponents from "styled-components";

function UserDetails({ details }) {
  return <UserDetailsStyle>{details.name}</UserDetailsStyle>;
}

export default UserDetails;

const UserDetailsStyle = styledComponents.div``;
