import { axiosBase as axios } from "./Config";

export const getProcessorByTypeBuilding = (typeProcessor, token) => {
    try {
        var response = axios.post("/getType-building", typeProcessor, {
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

export const getMotherBoardBuilding = (processorData, token) => {
    try {
        var response = axios.post("/getProcessor-building", processorData, {
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

export const getGraphicCardBuilding = (processorData, token) => {
    try {
        var response = axios.post("/getMotherboard-building", processorData, {
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

export const getRamBuilding = (token) => {
    try {
        var response = axios.post("/getRam-building", "", {
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

export const getStorageBuilding = (token) => {
    try {
        var response = axios.post("/getStorage-building", "", {
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