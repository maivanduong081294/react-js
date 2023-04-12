import { userConstants } from "~/constants";
import { userService } from "~/services";
import { alertActions } from "./";
import { useUser } from "~/hooks";

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
};

function login(username, password, rememberMe = false) {
    return (dispatch) => {
        dispatch(request({ username }));
        const fetchAPI = async () => {
            const result = await userService.login(username, password);
            if (result.status === 1) {
                dispatch(success(result.data));
                if (rememberMe !== "" && rememberMe.length > 0) {
                    useUser.setRememberMe(username, password);
                } else {
                    useUser.deleteRememberMe();
                }
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error(result.message));
            }
            return result.status;
        };
        return fetchAPI(username, password);
    };

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(data) {
    return (dispatch) => {
        dispatch(request(data));

        const fetchAPI = async () => {
            const { username, password, email } = data;
            const dataRegister = {
                username,
                password,
                email,
            };
            const result = await userService.register(dataRegister);
            if (result.status === 1) {
                dispatch(success(result.data));
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error(result.message));
            }
            return result.status;
        };
        return fetchAPI();
    };

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}

function getAll() {
    return (dispatch) => {
        dispatch(request());

        userService.getAll().then(
            (users) => dispatch(success(users)),
            (error) => dispatch(failure(error))
        );
    };

    function request() {
        return { type: userConstants.GETALL_REQUEST };
    }
    function success(users) {
        return { type: userConstants.GETALL_SUCCESS, users };
    }
    function failure(error) {
        return { type: userConstants.GETALL_FAILURE, error };
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return (dispatch) => {
        dispatch(request(id));

        userService.delete(id).then(
            (user) => {
                dispatch(success(id));
            },
            (error) => {
                dispatch(failure(id, error));
            }
        );
    };

    function request(id) {
        return { type: userConstants.DELETE_REQUEST, id };
    }
    function success(id) {
        return { type: userConstants.DELETE_SUCCESS, id };
    }
    function failure(id, error) {
        return { type: userConstants.DELETE_FAILURE, id, error };
    }
}
