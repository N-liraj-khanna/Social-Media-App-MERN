import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // *States
  // const [error, setError] = useState("");
  // *Handlers
  const login = () => {};

  return (
    <div className="login">
      <h1>Login</h1>
      {/* <div className="error">{error}</div> */}
      <form onSubmit={login} id="login-form" method="post" autoComplete="off">
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          required="required"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required="required"
        />
        <button
          className="btn-flip"
          data-back="Let me in."
          data-front="Let me in."
        ></button>
      </form>
      <Link to="/signup">
        <span className="no_account">No Account?</span>
      </Link>
    </div>
  );
};

export default Login;
