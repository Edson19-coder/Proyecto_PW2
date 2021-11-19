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