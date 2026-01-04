import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1 className="hero-title fade-in-title">
        STAY ORGANIZED . STAY PRODUCTIVE .
      </h1>

      <p className="hero-subtitle fade-in-delay">
        YOUR DAILY TASK MANAGEMENT , SIMPLIFIED
      </p>

      <button
        className="hero-button fade-in-delay-2"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </section>
  );
}

export default Landing;
