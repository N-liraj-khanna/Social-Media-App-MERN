import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // *States
  // const [error, setError] = useState("");
  // *Handlers
  const sign_up = () => {};

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {/* <div className="error">{error}</div> */}
      <form onSubmit={sign_up} autoComplete="off" id="signup-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required="required"
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
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
          data-back="Sign me in."
          data-front="Sign me in."
        ></button>
      </form>
      <Link to="/login">
        <span className="have_account">I'm a member!</span>
      </Link>
    </div>
  );
};

export default Signup;
