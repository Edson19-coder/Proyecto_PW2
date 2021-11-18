import { axiosBase as axios } from "./Config";

export const getProcessorByTypeBuilding = async (typeProcessor, token) => {
    try {
        const response = await axios.post("/getType-building", typeProcessor, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}