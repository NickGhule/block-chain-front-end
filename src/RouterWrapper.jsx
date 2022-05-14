import React from "react";
import { useData } from "./AppContext";
import { Auth } from "./Pages/Auth";
import Router from "./Router";

function RouterWrapper(props) {
  const { user, setUser } = useData();

  const handleFormSubmit = (mode, e) => {
    e.preventDefault();

    if (mode === "login") {
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      console.log(username, password);

      fetch(`http://127.0.0.1:5000/login/${username}/${password}/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            setUser(data.userType);
          } else alert("Login Failed");
        });
    } else {
      const fullname = document.getElementById("su-fullname").value;
      const username = document.getElementById("su-username").value;
      const usertype = document.getElementById("su-usertype").value;
      const password1 = document.getElementById("su-createpassword").value;
      const password2 = document.getElementById("su-repeatpassword").value;
      const userTypes = ["viewer"];

      if (password1 !== password2) {
        alert("password doesn't matched");
        return;
      }

      console.log(fullname, username, usertype, password1, password2);
    }
  };
  return user ? <Router /> : <Auth onSubmit={handleFormSubmit} />;
}

export default RouterWrapper;
