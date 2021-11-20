import { axiosBase as axios } from "./Config";

export const getSearchCategory = async (categorie,page) => {
    try {
        const response = await axios.get(`/getSearchCategory/${categorie}/${page}`);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getSearchWord = async (word,page) => {
    try {
        const response = await axios.get(`/getSearchWord/${word}/${page}`);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}



