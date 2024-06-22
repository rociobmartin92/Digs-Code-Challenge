import axios from "axios";
import { BASE_URL } from "../api";

const getCalendar = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/challenge`);

    return response;
  } catch (err) {
    console.log("error in request", err);
  }
};

export default getCalendar;
