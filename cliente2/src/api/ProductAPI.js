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

export const uploadImage = async (productId, formData, token) => {
    try {
        const response = await axios.post(`/upload-image-prod/${productId}`, formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}