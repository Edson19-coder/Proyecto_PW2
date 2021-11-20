import { axiosBase as axios } from "./Config";

export const createHistory = (buyCartData, token) => {
    try {
        var response = axios.post("/saveHistory", buyCartData, {
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

export const getHistory = async (token) => {
    try {
        const response = await axios.get("/history", {
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