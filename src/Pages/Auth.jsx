import React from "react";
import styled from "styled-components";

const mode = "login";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
    };
  }
  toggleMode() {
    var newMode = this.state.mode === "login" ? "signup" : "login";
    this.setState({ mode: newMode });
  }
  render() {
    return (
      <div>
        <div
          className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`}
        ></div>
        <section className={`form-block form-block--is-${this.state.mode}`}>
          <header className="form-block__header">
            <h1>{this.state.mode === "login" ? "Welcome back!" : "Sign up"}</h1>
            <div className="form-block__toggle-block">
              <span>
                {this.state.mode === "login" ? "Don't" : "Already"} have an
                account? Click here &#8594;
              </span>
              <input
                id="form-toggler"
                type="checkbox"
                onClick={this.toggleMode.bind(this)}
              />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
        </section>
      </div>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={(values) => this.props.onSubmit(this.props.mode, values)}>
        <div className="form-block__input-wrapper">
          <div className="form-group form-group--login">
            <Input
              type="text"
              id="login-username"
              label="user name"
              disabled={this.props.mode === "signup"}
              name="username"
            />
            <Input
              type="password"
              id="login-password"
              label="password"
              disabled={this.props.mode === "signup"}
              name="password"
            />
          </div>
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="su-fullname"
              label="full name"
              disabled={this.props.mode === "login"}
              name="fullname"
            />
            <Input
              type="username"
              id="su-username"
              label="username"
              disabled={this.props.mode === "login"}
              name="username"
            />
            <Input
              type="usertype"
              id="su-usertype"
              label="user type"
              disabled={this.props.mode === "login"}
              name="usertype"
            />
            <Input
              type="password"
              id="su-createpassword"
              label="password"
              disabled={this.props.mode === "login"}
              name="createpassword"
            />
            <Input
              type="password"
              id="su-repeatpassword"
              label="repeat password"
              disabled={this.props.mode === "login"}
              name="repeatpassword"
            />
          </div>
        </div>
        <button className="button button--primary full-width" type="submit">
          {this.props.mode === "login" ? "Log In" : "Sign Up"}
        </button>
      </form>
    );
  }
}

const Input = ({ id, type, label, disabled, name }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
    name={name}
    required
  />
);

export const Auth = ({ onSubmit }) => (
  <AuthStyle>
    <div className={`app app--is-${mode}`}>
      <LoginComponent mode={mode} onSubmit={onSubmit} />
    </div>
  </AuthStyle>
);

const AuthStyle = styled.div`
  html,
  body,
  .container,
  #app {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: #fff;
    margin: 0 !important;
  }

  .app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow-y: scroll;
    background-image: url("https://unsplash.it/1366/768?image=568");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .form-block-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    -moz-transition: all 0.85s ease-in-out;
    -webkit-transition: all 0.85s ease-in-out;
    transition: all 0.85s ease-in-out;
  }
  .form-block-wrapper--is-login {
    opacity: 0.92;
    background-color: #2c497f;
  }
  .form-block-wrapper--is-signup {
    opacity: 0.94;
    background-color: #433b7c;
  }

  .form-block {
    position: relative;
    margin: 100px auto 0;
    width: 285px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.13);
    border-radius: 2px;
    color: #fff;
    -webkit-box-shadow: 0px 0px 16px 9px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: 0px 0px 16px 9px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 0px 16px 9px rgba(0, 0, 0, 0.07);
  }

  .form-block__header {
    margin-bottom: 20px;
  }
  .form-block__header h1 {
    font-size: 30px;
    margin: 0 0 20px;
  }

  .form-block__toggle-block {
    position: relative;
  }
  .form-block__toggle-block span {
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
  }

  .form-block__input-wrapper {
    height: 126px;
    position: relative;
    margin-bottom: 2px;
    -moz-transition: all 0.25s cubic-bezier(0.36, 1, 0.62, 0.98) 0.3s;
    -webkit-transition: all 0.25s cubic-bezier(0.36, 1, 0.62, 0.98) 0.3s;
    transition: all 0.25s cubic-bezier(0.36, 1, 0.62, 0.98) 0.3s;
  }
  .form-block--is-signup .form-block__input-wrapper {
    height: 322px;
    -moz-transition: all 0.5s cubic-bezier(0.36, 1, 0.62, 0.98) 0.2s;
    -webkit-transition: all 0.5s cubic-bezier(0.36, 1, 0.62, 0.98) 0.2s;
    transition: all 0.5s cubic-bezier(0.36, 1, 0.62, 0.98) 0.2s;
  }

  .form-group--signup {
    position: absolute;
    top: 0;
    left: 150%;
    width: 100%;
  }

  .form-group__input {
    display: block;
    font-size: 15px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    padding: 14px 10px;
    margin-bottom: 15px;
    background: rgba(30, 23, 23, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1px;
  }
  .form-group__input:focus {
    outline: none;
    border: 1px solid #fff;
    background: transparent;
  }
  .form-block--is-signup .form-group__input {
    transform: translateX(-150%);
  }
  .form-group--login .form-group__input {
    opacity: 1;
  }
  .form-block--is-signup .form-group--login .form-group__input {
    opacity: 0;
  }
  .form-group--signup .form-group__input {
    opacity: 0;
  }
  .form-block--is-signup .form-group--signup .form-group__input {
    opacity: 1;
  }

  .form-group__input:nth-of-type(1) {
    -moz-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.085s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    -webkit-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.085s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.085s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
  }

  .form-group__input:nth-of-type(2) {
    -moz-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.17s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    -webkit-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.17s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.17s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
  }

  .form-group__input:nth-of-type(3) {
    -moz-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.255s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    -webkit-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.255s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.255s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
  }

  .form-group__input:nth-of-type(4) {
    -moz-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    -webkit-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
  }

  .form-group__input:nth-of-type(5) {
    -moz-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    -webkit-transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
    transition: transform 0.35s cubic-bezier(0.36, 1, 0.62, 0.98) 0.34s,
      opacity 0.3s ease-in-out 0.2s, background 0.15s ease-in-out,
      border 0.3s ease-in-out;
  }

  .button {
    display: inline-block;
    padding: 15px 12px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: none;
    border-radius: 2px;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.1);
  }
  .button--primary {
    background: #ed6a5e;
    color: #fff;
  }
  .button:hover {
    -webkit-box-shadow: 0px 0px 18px 15px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 18px 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 18px 15px rgba(0, 0, 0, 0.15);
  }

  .full-width {
    width: 100%;
  }

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label:before {
    content: "";
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    width: 43px;
    height: 8px;
    background: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
  }
  input[type="checkbox"] + label:after {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    right: 18px;
    width: 25px;
    height: 25px;
    background: #ed6a5e;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.15);
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  input[type="checkbox"]:checked + label:after {
    right: 0;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    font-weight: 300;
    color: rgba(255, 255, 255, 0.988);
  }

  :-ms-input-placeholder {
    /* IE 10+ */
    font-weight: 300;
    color: rgb(209, 209, 209);
  }

  :-moz-placeholder {
    /* Firefox 18- */
    font-weight: 300;
    color: rgb(250, 245, 245);
  }

  .tooltip {
    padding: 7px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 12px;
    position: absolute;
    top: -10px;
    right: 0;
  }
`;
