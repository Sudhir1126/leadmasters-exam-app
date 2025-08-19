import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={{
        ...styles.card,
        transform: animate ? "scale(1)" : "scale(0.8)",
        opacity: animate ? 1 : 0,
        transition: "all 0.5s ease-in-out"
      }}>
        <h1 style={styles.mainTitle}>LeadMasters Exam</h1>
        <h2 style={styles.title}><b style={styles.glow}>Login</b></h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          {error && <p style={styles.error}>{error}</p>}

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(85, 99, 222, 0.4)"}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)"}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={styles.text}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", justifyContent: "center", alignItems: "center",
    height: "100vh", background: "linear-gradient(135deg, #74ABE2, #5563DE)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "50px 40px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "380px",
  },
  mainTitle: {
    marginBottom: "10px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#252d36ff",
    letterSpacing: "1px",
  },
  title: {
    marginBottom: "30px",
    color: "#555",
    fontSize: "24px",
    fontWeight: "500",
  },
  glow: {
    color: "#030202ff",
    textShadow: "0 0 10px #e2d6d6ff, 0 0 20px #bdc0c3ff",
  },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    outline: "none",
    fontSize: "16px",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #5563DE, #74ABE2)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
  text: { marginTop: "20px", color: "#555", fontSize: "14px" },
  link: { color: "#5563DE", cursor: "pointer", fontWeight: "bold" },
  error: { color: "red", marginBottom: "15px", fontSize: "14px" },
};

export default Login;
