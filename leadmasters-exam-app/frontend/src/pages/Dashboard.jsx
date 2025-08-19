import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {/* Logout button */}
      <div style={styles.logoutContainer}>
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </div>

      {/* Dashboard title */}
      <h1 style={styles.header}>Leadmasters Exam Dashboard</h1>

      {/* Cards */}
      <div style={styles.cardContainer}>
        <div
          style={{ ...styles.card, backgroundColor: "#5563DE" }}
          onClick={() => navigate("/exam")}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 12px 25px rgba(85, 99, 222, 0.6)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)"}
        >
          <h2 style={styles.cardTitle}>Start Exam</h2>
          <p>Attempt the exam and test your knowledge.</p>
        </div>

        <div
          style={{ ...styles.card, backgroundColor: "#43cea2", color: "#fff" }}
          onClick={() => navigate("/result")}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 12px 25px rgba(67, 206, 162, 0.6)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)"}
        >
          <h2 style={styles.cardTitle}>View Results</h2>
          <p>Check your latest scores and performance.</p>
        </div>

        <div
          style={{ ...styles.card, backgroundColor: "#f39c12", color: "#fff" }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 12px 25px rgba(243, 156, 18, 0.6)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)"}
        >
          <h2 style={styles.cardTitle}>Statistics</h2>
          <p>View charts and progress graphs (Coming Soon)</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  logoutContainer: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  logoutBtn: {
    background: "#ff4b5c",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  header: {
    color: "#fff",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "80px", // increased margin to place cards lower
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "40px", // adds extra spacing below the header
  },
  card: {
    width: "250px",
    minHeight: "180px",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    cursor: "pointer",
    color: "#fff",
    transition: "all 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
    textShadow: "0 0 5px rgba(0,0,0,0.3)",
  },
};

export default Dashboard;
