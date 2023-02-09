import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    // prevent default submit action
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json(workout);

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="md:col-span-1">
      <form className="leading-8" onSubmit={handleSubmit}>
        <h3 className="font-semibold mb-4"> Add a new workout</h3>

        <label>Exercise Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full border-2 border-white px-2 rounded focus:outline-none focus:border-2 focus:border-gray-400 focus:rounded-md"
        />

        <label>Load (in kg):</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className="w-full border-2 border-white px-2 rounded focus:outline-none focus:border-2 focus:border-gray-400 focus:rounded-md"
        />

        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="w-full border-2 border-white px-2 rounded focus:outline-none focus:border-2 focus:border-gray-400 focus:rounded-md"
        />
        <button className="my-4 text-center bg-blue-600 px-4 py-2 rounded text-white text-sm">
          Add Workout
        </button>

        {error && (
          <div className="text-sm border-2 px-2 py-2 leading-8 border-red-600 text-red-700 bg-red-200 mb-4">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default WorkoutForm;