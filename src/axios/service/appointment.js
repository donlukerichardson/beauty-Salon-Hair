import axios from "axios";
import { Host, ApiEndpoints } from "../common/apiEndpoint";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const createAppointment = async (data) => {
    return await axios.post(
      `${Host.BACKEND}${ApiEndpoints.contactEndpoints.route}${ApiEndpoints.contactEndpoints.create}`,
      data,
      { headers: { ...config.headers } }
    );
  };
export {createAppointment};