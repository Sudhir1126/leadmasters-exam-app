import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Exam Result</h2>
        <p style={styles.score}>
          Your Score: <span style={styles.scoreNumber}>{score}</span> / {total}
        </p>
        <button
          style={styles.button}
          onClick={() => navigate("/dashboard")}
          onMouseOver={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, #5563DE, #74ABE2)")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#5563DE")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", justifyContent: "center", alignItems: "center",
    background: "linear-gradient(135deg, #74ABE2, #5563DE)",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "linear-gradient(135deg, #ffffff, #f0f4ff)",
    padding: "50px 40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "400px",
    transition: "transform 0.3s",
  },
  title: {
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "700",
    color: "#2c3e50",
    letterSpacing: "1px",
  },
  score: {
    fontSize: "20px",
    marginBottom: "30px",
    color: "#34495e",
  },
  scoreNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2ecc71",
    textShadow: "0 0 8px rgba(46, 204, 113, 0.6)",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#5563DE",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
  },
};

export default Result;
