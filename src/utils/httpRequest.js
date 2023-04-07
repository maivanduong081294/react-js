import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
    },
});

export const get = async (url, options = {}) => {
    const response = await httpRequest.get(url, options);
    return response.data;
};

export const post = async (url, options = {}) => {
    const response = await httpRequest.post(url, options);
    return response.data;
};

export default httpRequest;
