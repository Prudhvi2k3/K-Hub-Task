import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "320px",
  },
  formTitle: {
    fontSize: "24px",
    marginBottom: "15px",
    color: "black",
  },
  formGroup: {
    marginBottom: "15px",
  },
  formInput: {
    width: "92%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    color: "black",
  },
  formInputPlaceholder: {
    color: "#aaa",
  },
  formSubmitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    aligntext: "center",

  },
  error: {
    color: "#ff0000",
    marginBottom: "10px",
  },
  orText: {
    marginTop: "20px",
    textAlign: "center",
    color: "black",
  },
  signupLink: {
    display: "block",
    marginTop: "20px", 
    textDecoration: "none",
    color: "black",
    textAlign: "center",
  },
  showPasswordButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    outline: "none",
    padding: 0,
    marginLeft: "5px",
    color: "black",
  },
};

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Track show/hide state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function submit(e) {
    e.preventDefault();
  
    try {
      console.log("Submitting:", email, password);

      
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
  
      console.log("Response:", response.data);
  
      if (response.data === "exist") {
        setErrorMessage("User already exists");
      } else if (response.data === "notexist") {
        history("/home", { state: { id: email } });
      }
    } catch (error) {
      setErrorMessage("An error occurred",error);
      console.error(error);
    }
  }
  

  return (
    <div style={styles.container} className="login">
      <h1 style={styles.formTitle}>Signup</h1>

      {errorMessage && <p style={styles.error}>{errorMessage}</p>} {/* Display error message */}

      <form style={styles.formContainer}>
        <div style={styles.formGroup}>
          <input
            type="email"
            style={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type={showPassword ? "text" : "password"}
            style={styles.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="placeholder-black"
          />
          <button
            type="button"
            style={styles.showPasswordButton}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="submit"
          style={styles.formSubmitButton}
          onClick={submit}
        >
          Signup
        </button>
      </form>

      <br />
      <p style={styles.orText}>Already Signed Up? lets Login</p>
      <br />

      <Link to="/" style={styles.signupLink}>Login</Link>
    </div>
  );
}
export default Signup;
