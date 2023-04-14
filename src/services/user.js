import { useAES } from "~/hooks";
import { get, post, _delete, put } from "~/utils/httpRequest";

const login = async (username, password) => {
    try {
        const res = await post("users/authentication", { username, password });
        if (res.status === 1) {
            localStorage.setItem("user", useAES.encrypt(res.data));
        }
        return res;
    } catch (error) {
        console.log(error);
    }
};

function logout() {
    localStorage.removeItem("user");
}

function getAll() {
    const requestOptions = {
        method: "GET",
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

const getDetail = async (id) => {
    try {
        const res = await get(`users/${id}`);
        console.log();
        return res;
    } catch (error) {
        console.log(error);
    }
};

const forgotPassword = async (email) => {
    try {
        const res = await post("users/forgot-password", { email });
        return res;
    } catch (error) {
        console.log(error);
    }
};

const register = async (data) => {
    try {
        const res = await post("users", data);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const updateDetail = async (id, user) => {
    try {
        const res = await put(`users/${id}`, user);
        return res;
    } catch (error) {
        console.log(error);
    }
};
const activeAccout = async (id) => {
    try {
        const res = await updateDetail(id, { enabled: 1 });
        return res;
    } catch (error) {
        console.log(error);
    }
};

// prefixed function name with underscore because delete is a reserved word in javascript
const remove = async (id) => {
    try {
        const res = await _delete("users/" + id);
        return res;
    } catch (error) {
        console.log(error);
    }
};

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const userService = {
    login,
    logout,
    register,
    forgotPassword,
    activeAccout,
    getAll,
    getDetail,
    updateDetail,
    delete: remove,
};
