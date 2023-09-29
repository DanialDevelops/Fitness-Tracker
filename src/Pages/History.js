import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts"); // Assuming this endpoint returns the user's workouts
        setWorkouts(response.data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <h1>Exercise History</h1>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <div>Name: {workout.name}</div>
            <div>Reps: {workout.reps}</div>
            <div>Weight: {workout.weight} lbs</div>
            <div>Sets: {workout.sets}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;