import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  // Form States
  const [regUsername, setRegUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/register", {
      username: regUsername,
      email: regEmail,
      password: regPassword
    })
    .then(() => {
      alert("Registration Successful! Please login.");
      setIsActive(false); // Switch to login view
    })
    .catch((err) => alert("Registration Failed: " + (err.response?.data?.error || "Error")));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/login", {
      username: loginUsername,
      password: loginPassword
    })
    .then((res) => {
      alert("Login Successful!");
      setCurrentUser(res.data.user); // Save user to state
      navigate("/"); // Send back to Home page
    })
    .catch(() => alert("Login Failed. Please check your credentials."));
  };

  return (
    <div className="login-page-wrapper">
      <div className={`container ${isActive ? "active" : ""}`}>
        
        {/* --- Login Form --- */}
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>

        {/* --- Registration Form --- */}
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
        </div>

        {/* --- Toggle Panels --- */}
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button type="button" className="btn register-btn" onClick={() => setIsActive(true)}>Register</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button type="button" className="btn login-btn" onClick={() => setIsActive(false)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;