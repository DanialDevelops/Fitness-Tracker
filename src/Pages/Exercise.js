import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");

  const handleAddExercise = () => {
    if (newExercise.trim() !== "") {
      const exerciseData = {
        name: newExercise,
        reps: reps,
        weight: weight,
        sets: sets,
      };
      setExercises([...exercises, exerciseData]);
      setNewExercise("");
      setReps("");
      setWeight("");
      setSets("");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Add Exercise</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={newExercise}
                onChange={(e) => setNewExercise(e.target.value)}
                placeholder="Enter exercise name"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="Reps"
              />
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight (lbs)"
              />
              <input
                type="number"
                className="form-control"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                placeholder="Sets"
              />
            </div>
            <button
              className="btn btn-success"
              type="button"
              onClick={handleAddExercise}
            >
              Add Exercise
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Exercise List</h2>
            <div className="mt-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="card mb-2">
                  <div className="card-body">
                    <div>{exercise.name}</div>
                    <div>
                      Reps: {exercise.reps}, Weight: {exercise.weight} lbs, Sets:{" "}
                      {exercise.sets}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
