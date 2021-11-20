import { axiosBase as axios } from "./Config";

export const createUser = async (user) => {
    try {
        const response = await axios.post("/user-register", user);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getUserByEmailAndPassword = async (user) => {
    try {
        const response  = await axios.post("/user-login", user);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const getUser = async (token) => {
    try {
        const response = await axios.get("/getUser", {
            headers: {
                Authorization: token
            }
        });
        return response.data["user"];
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const updateUser = async (user, token, userId) => {
    try {
        const response = await axios.put(`/update-user/${userId}`, user, {
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

export const uploadImage = async (userId, formData, token) => {
    try {
        const response = await axios.post(`/upload-image-user/${userId}`, formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}