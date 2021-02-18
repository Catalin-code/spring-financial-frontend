import axios from "axios";

const baseUrl = "http://localhost:8080/api/customer/pid";

export const getUserData = async (userPid) => {
  try {
    const { data } = await axios.get(`${baseUrl}=${userPid}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export default getUserData;
