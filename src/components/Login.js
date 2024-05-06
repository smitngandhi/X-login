import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <div>
      <div className="container">
        <img src="./Xlogo.png" alt="Xlogo" className="X-logo" />
        <h2>Sign In to X</h2>
        <button className="google">
          <img src="./googlelogo.png" alt="google" className="logo" />
          Sign in with Google
        </button>
        <button className="apple">
          <img src="./appplelogo.png" alt="apple" className="logo" />
          Sign in with Apple
        </button>
        <hr />
        <p>Or</p>

        <form action="">
          <button className="create">Create Account</button>
          <h6>
            By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy,</span>
            including <span>Cookie Use.</span>
          </h6>
        </form>

        <h3>
         Already have an Account?
        </h3>
        <button className="signin">Sign In</button>
      </div>
    </div>
  );
};

export default Login;
