import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading fade-title">Login</h1>

        <div className="input-group">
          <span className="icon">✉</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
          <span className="forgot">Forgot Password?</span>
        </div>

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>
            Sign Up here.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
