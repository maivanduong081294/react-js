import { useAES } from "./useHash";

const isLogin = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return useAES.decrypt(user);
    } else {
        return user;
    }
};

const setRememberMe = (username, password) => {
    const data = {
        username,
        password,
    };
    const _data = useAES.encrypt(data);
    localStorage.setItem("rememberMe", _data);
};

const getRememberMe = () => {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe) {
        const data = useAES.decrypt(rememberMe);
        const { username, password } = data;
        return { username, password };
    }
    return { username: "", password: "" };
};

const deleteRememberMe = () => {
    localStorage.removeItem("rememberMe");
};

const customPermisionId = () => {
    return 5;
};

export const useAuth = {
    isLogin,
    setRememberMe,
    getRememberMe,
    deleteRememberMe,
    customPermisionId,
};
