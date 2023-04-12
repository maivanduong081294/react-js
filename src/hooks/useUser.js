const crypto = require("crypto-js");
const AES_TOKEN = process.env.REACT_APP_TOKEN_AES || "AES";

const isLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? true : false;
};

const setRememberMe = (username, password) => {
    const data = {
        username,
        password,
    };
    const _data = crypto.AES.encrypt(
        JSON.stringify(data),
        AES_TOKEN
    ).toString();
    localStorage.setItem("rememberMe", _data);
};

const getRememberMe = () => {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe) {
        const data = JSON.parse(
            crypto.AES.decrypt(rememberMe, AES_TOKEN).toString(crypto.enc.Utf8)
        );
        const { username, password } = data;
        return { username, password };
    }
    return { username: "", password: "" };
};

const deleteRememberMe = () => {
    localStorage.removeItem("rememberMe");
};

export const useUser = {
    isLogin,
    setRememberMe,
    getRememberMe,
    deleteRememberMe,
};
