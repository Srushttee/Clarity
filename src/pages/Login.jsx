import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      {/* Left image section */}
      <div className="login-image"><img src="assets/Login.jpg" alt="" /></div>

      {/* Right form section */}
      <div className="login-form-section">
        <h1 className="login-heading">Login</h1>

        <div className="input-group">
          <span className="icon">✉</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
          <span className="forgot">Forgot Password ?</span>
        </div>

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Don't have an account ? <span>Sign Up here .</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
