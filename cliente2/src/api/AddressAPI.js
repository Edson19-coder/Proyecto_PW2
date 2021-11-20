import { axiosBase as axios } from "./Config";

export const createAddress = (addressData, token) => {
    try {
        var response = axios.post("/createAddress", addressData, {
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
export const editAddress = (addressData, token) => {
    try {
        var response = axios.put("/updateAddress", addressData, {
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
export const getAddress = (token) => {
    try {
        var response = axios.get("/address", {
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

