import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import Container from "react-bootstrap/Container";
import Header from "../Components/header";
import ExerciseCard from "./Exercise.js"; // Import the ExerciseCard component

export default function Home() {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn();

  return (
    <div className="homepage">
      <Header />
      <Container className="home mt-4"> {/* Add mt-4 class for top margin */}
        <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <h1 className="home-title">Your Fitness Portfolio</h1>
          <p className="home-text">
            Experience effortless and enjoyable exercise tracking with FitFolio.{" "}
            <br />
            Embrace a healthier lifestyle, unlock your potential, and achieve your
            fitness goals. Join us now for a transformative fitness journey!
          </p>
          <ExerciseCard />
          {loggedIn ? (
            <button className="home-btn" onClick={() => navigate("/exercise")}>
              Add Exercise
            </button>
          ) : (
            <button className="home-btn" onClick={() => navigate("/signup")}>
              Get Started
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}
