import React from "react";
import styledComponents from "styled-components";

function UserCard({ name, id, doc, isSelected, onUserCardClick }) {
  return (
    <UserCardStyle
      style={{
        border: isSelected ? "2px solid blue" : "2px solid transparent",
      }}
      onClick={() => onUserCardClick(id)}
    >
      <div className="name">{name}</div>
      {/* <div className="id">{id}</div> */}
      {/* <div className="doc">{doc}</div> */}
    </UserCardStyle>
  );
}

const UserCardStyle = styledComponents.div`
    

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

export default UserCard;
