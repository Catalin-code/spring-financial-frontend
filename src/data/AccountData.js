import axios from "axios";

const baseUrl = "http://localhost:8080/api/account/customerId";

export const getAccountData = async (customerId) => {
    try {
        const { data } = await axios.get(`${baseUrl}=${customerId}`);
        return data;
    } catch (err) {
        throw err;
    }
};

export default getAccountData;
