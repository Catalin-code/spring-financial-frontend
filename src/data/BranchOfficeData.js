import axios from 'axios';

const baseUrl = "http://localhost:8080/api/locations";

export const  getBranchOfficeData = async () => {
    try {
        const { data } = await axios.get(baseUrl);
        return data;
    } catch (error) {
        throw error;
    }
};

export default getBranchOfficeData;
