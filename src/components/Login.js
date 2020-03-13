import React from "react";
import Heading from "./Heading";
import LoginForm from "./LoginForm";

function Login(props) {
  return (
    <div>
      <Heading content="Title from prop" />
      <LoginForm />
    </div>
  );
}

export default Login;
