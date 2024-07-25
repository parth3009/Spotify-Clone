import React from "react";
import "./Login.css";
import { LoginUrl } from "./spotify";

function Login() {
  return (
    <div className="Login">
        <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
      {/* spotify logo */}
      {/* Login with spotify button*/}
    </div>
  );
}

export default Login;


