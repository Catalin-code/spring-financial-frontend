import axios from "axios";

const baseUrl = "http://localhost:8080/api/locations";

export const getBranchOfficesData = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    return data;
  } catch (err) {
    throw err;
  }
};

export default getBranchOfficesData;
