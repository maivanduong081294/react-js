import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const configAxios = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
    },
};

export const get = async (url, options = {}) => {
    const response = await httpRequest.get(url, options, configAxios);
    return response.data;
};

export const post = async (url, options = {}) => {
    const response = await httpRequest.post(url, options, configAxios);
    return response.data;
};

export default httpRequest;
