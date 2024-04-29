import axios from "axios";

export const API = {
  getAllUsers: () => axios.get("api/users"),
};
