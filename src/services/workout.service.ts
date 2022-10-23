import axios from "axios";

export const getWorkout = () => {
  return axios.get(`http://localhost:3000/Workout`);
};
