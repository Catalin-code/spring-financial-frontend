import axios from "axios";

const baseUrl = "http://localhost:8080/api/test/account/customerPid";

export const getAccountData = async (customerPid) => {
  try {
    const { data } = await axios.get(`${baseUrl}=${customerPid}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export default getAccountData;
