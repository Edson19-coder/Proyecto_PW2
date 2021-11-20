import { axiosBase as axios } from "./Config";

export const createAddress = (addressData, token) => {
    try {
        var response = axios.post("/createAddress", addressData, {
            headers: {
                Authorization: token
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const deleteCart = async (token) => {
    try {
        const response = await axios.delete("/deleteAddress", {
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
