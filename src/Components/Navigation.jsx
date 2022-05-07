import React from "react";
import styledComponents from "styled-components";
import UserCard from "./UserCard";

function Navigation({ users, selectedUserId, onUserCardClick }) {
  return (
    <NavigationStyle>
      {users.map((user) => (
        <UserCard
          name={user?.name}
          id={user?.id}
          doc={user?.doc}
          isSelected={user?.id == selectedUserId}
          onUserCardClick={onUserCardClick}
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
