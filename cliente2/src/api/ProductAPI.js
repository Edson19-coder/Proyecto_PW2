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

export const getProductByIdAndCategory = async (productId, category, token) => {
    try {
        const response = await axios.get(`/getProduct/${productId}/${category}`, {
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


export const getImageProduct = async (image, token) => {
    try {
        const response = await axios.get(`/get-image-prod/${image}`, {
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

export const getProductsIndex = async (page) => {
    try {
        const response = await axios.get(`/getProductsIndex/${page}`);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
