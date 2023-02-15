import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { CiTrash } from "react-icons/ci";

const WorkoutDetails = ({ workout }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="bg-white mb-4 p-4 rounded-md flex justify-between">
      <div className="leading-6">
        <h4 className="text-blue-500 font-bold text-sm mb-2">
          {workout.title}
        </h4>
        <p className="text-sm">
          <strong>Loads (kg): </strong>
          {workout.load}
        </p>
        <p className="text-sm">
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p className="text-xs mt-1">
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <span
        className="text-red-500 text-sm rounded-md inline-flex cursor-pointer hover:text-red-700"
        onClick={handleDelete}
      >
        <CiTrash className="text-xl" />
      </span>
    </div>
  );
};

export default WorkoutDetails;
