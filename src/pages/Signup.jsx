import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-heading">CREATE AN ACCOUNT</h1>

        <div className="input-group">
          <span className="icon">✉</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="input-group">
          <span className="icon">⚙</span>
          <input type="text" placeholder="Admin Token ( Optional )" />
        </div>

        <div className="button-group">
          <button className="primary-btn">Register</button>
          <button className="secondary-btn">Register as Admin</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
