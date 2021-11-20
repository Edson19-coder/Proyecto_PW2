import { axiosBase as axios } from "./Config";

export const getCart = async (token) => {
    try {
        const response = await axios.get("/cart", {
            headers: {
                Authorization: token
            }
        });
        return response.data[0];
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const deleteCart = async (token) => {
    try {
        const response = await axios.delete("/deleteCart", {
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

export const deleteProductFromCart = async (productId, token) => {
    try {
        const response = await axios.delete(`/deleteItemByUserIdAndProductId/${productId}`, {
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