import axios from "axios";
import { Host, ApiEndpoints } from "../common/apiEndpoint";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const createAppointment = async (data) => {
    return await axios.post(
      `${Host.BACKEND}${ApiEndpoints.AppointmentEndpoints.route}${ApiEndpoints.AppointmentEndpoints.create}`,
      data,
      { headers: { ...config.headers } }
    );
  };
  const getTimes = async (filterage) => {
    return await axios.get(
      `${Host.BACKEND}${ApiEndpoints.AppointmentEndpoints.route}${ApiEndpoints.AppointmentEndpoints.times}`,
      { headers: { ...config.headers } , params:filterage } 
    );
  };
export {createAppointment,getTimes};