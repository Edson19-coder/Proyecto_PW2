import { axiosBase as axios } from "./Config";

export const getReportSales = async (token) => {
    try {
        const response = await axios.get("/getReportSales", {
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


export const totalActiveCarts = async (token) => {
    try {
        const response = await axios.get("/totalActiveCarts", {
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

export const getTotalSales = async (token) => {
    try {
        const response = await axios.get("/getTotalSales", {
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

export const getTotalActiveProducts = async (token) => {
    try {
        const response = await axios.get("/getTotalActiveProducts", {
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

export const getReportTopSellingProducts = async (token) => {
    try {
        const response = await axios.get("/getReportTopSellingProducts", {
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