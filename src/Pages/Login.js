import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import Header from "../Components/header";
import { loginUser } from "../utils/Login"; // Import the loginUser function

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  const loggedIn = Auth.loggedIn();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formState;

    try {
      const token = await loginUser(email, password); // Call loginUser with email and password

      // If the token is received, log in the user
      if (token) {
        Auth.login(token);
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      setShowAlert(true);
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login d-flex flex-column align-items-center justify-content-center text-center">
      <Header />
      <form onSubmit={handleFormSubmit} className="login-form d-flex flex-column">
        <label htmlFor="email">Email</label>
        <input
          className="form-input"
          value={formState.email}
          placeholder="youremail@gmail.com"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-input"
          value={formState.password}
          placeholder="********"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <div className="btn-div">
          <button
            disabled={!(formState.email && formState.password)}
            className="login-btn mx-auto my-auto"
          >
            Log In
          </button>
        </div>
        <p className="link-btn">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        {showAlert && <div className="err-message">Login failed</div>}
      </form>
    </div>
  );
}
