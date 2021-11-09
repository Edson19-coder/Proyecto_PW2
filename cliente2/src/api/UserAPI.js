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