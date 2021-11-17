import { axiosBase as axios } from "./Config";

export const createProduct = async (product, token) => {
    try {
        const response = await axios.post("/createProduct", product, {
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