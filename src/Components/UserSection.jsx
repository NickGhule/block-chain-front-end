import React from "react";
import styledComponents from "styled-components";
import EditSection from "./EditSection";
import UserDetails from "./UserDetails";
import UserForm from "./UserForm";

function UserSection({ user, isVarifier, userType }) {
  return (
    <UserSectionStyle>
      <div className="header">{userType}</div>
      <UserDetails details={{ name: user.name }} />
      <EditSection isVarifier={isVarifier} />
    </UserSectionStyle>
  );
}

export default UserSection;

const UserSectionStyle = styledComponents.section`

 display: grid;
 grid-template-rows: auto 1fr;

 .header{
   background: red;
   color: white;
   padding: 1rem;
 }

`;
