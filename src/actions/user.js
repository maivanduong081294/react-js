import { userConstants } from "~/constants";
import { userService } from "~/services";
import { alertActions, emailActions } from "./";
import { getUrl, useAES, useUser } from "~/hooks";
import { RegisterEmailTemplate } from "~/components/EmailTemplates";
import { getEmailTemplate } from "~/hooks";
import config from "~/config";

export const userActions = {
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    activeAccount,
    getAll,
    getDetail,
    updateDetail,
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
            } else if (result.status === -1) {
                dispatch(failure(result.message));
                dispatch(alertActions.error("Tài khoản chưa được kích hoạt"));
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error("Đăng nhập thất bại"));
            }
            return result;
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

function forgotPassword(email) {
    console.log(email);
    return (dispatch) => {
        dispatch(request({ email }));
        const fetchAPI = async () => {
            const result = await userService.forgotPassword(email);
            if (result.status === 1) {
                const user = result.user;
                const token = useAES.encrypt({ id: user.id });
                const mailLink = getUrl(
                    config.routes.resetPassword + "/?token=" + token
                );
                const html = getEmailTemplate(
                    <RegisterEmailTemplate link={mailLink} />
                );
                const send = await emailActions.send({
                    to: email,
                    subject: "Quên mật khẩu",
                    html: html,
                });
                dispatch(success(user));
                if (send.status === 1) {
                    dispatch(
                        alertActions.success(
                            "Vui lòng kiểm tra email để đặt lại mật khẩu"
                        )
                    );
                } else {
                    dispatch(
                        alertActions.error(
                            "Lỗi hệ thống. Vui lòng thử lại sau hoặc liên hệ để được hỗ trợ"
                        )
                    );
                }
                return send.status;
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error(result.message));
            }
            return result.status;
        };
        return fetchAPI(email);
    };

    function request(email) {
        return { type: userConstants.FORGOT_PASSWORD_REQUEST, email };
    }
    function success(email) {
        return { type: userConstants.FORGOT_PASSWORD_SUCCESS, email };
    }
    function failure(error) {
        return { type: userConstants.FORGOT_PASSWORD_FAILURE, error };
    }
}

function resetPassword(id, password) {
    return (dispatch) => {
        dispatch(request(id, password));
        const fetchAPI = async () => {
            const result = await userService.updateDetail(id, {
                password: password,
                reset_password: 0,
            });
            if (result.status === 1) {
                dispatch(success(result.user));
                dispatch(alertActions.success("Đặt lại mật khẩu thành công"));
            } else {
                dispatch(failure(result.message));
                dispatch(
                    alertActions.error("Đặt lại mật khẩu không thành công")
                );
            }
            return result.status;
        };
        return fetchAPI();
    };
    function request(id, password) {
        return { type: userConstants.RESET_PASSWORD_REQUEST, id, password };
    }
    function success(user) {
        return { type: userConstants.RESET_PASSWORD_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.RESET_PASSWORD_FAILURE, error };
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
                permission_id: useUser.customPermisionId(), //Default Customer
            };
            const result = await userService.register(dataRegister);
            if (result.status === 1) {
                const user = result.user;
                data = useAES.encrypt({ id: user.id });
                const activeLink = getUrl(
                    config.routes.register + "/?active=" + data
                );
                const html = getEmailTemplate(
                    <RegisterEmailTemplate link={activeLink} />
                );
                const send = await emailActions.send({
                    to: email,
                    subject: "Đăng ký tài khoản",
                    html: html,
                });
                dispatch(success(user));
                if (send.status === 1) {
                    dispatch(
                        alertActions.success(
                            "Đăng ký thành công! Vui lòng kiểm tra email để kích hoạt"
                        )
                    );
                } else {
                    userService.delete(user.id);
                    dispatch(alertActions.error("Đăng ký không thành công"));
                }
                return send.status;
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

function getDetail(id, data) {
    return (dispatch) => {
        dispatch(request(id, data));
        const fetchAPI = async () => {
            const result = await userService.getDetail(id, data);
            if (result.status === 1) {
                dispatch(success(result.user));
                dispatch(alertActions.success("Lấy dữ liệu thành công"));
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error("Không tìm thấy tài khoản"));
            }
            return result.status;
        };
        return fetchAPI();
    };
    function request(id, data) {
        return { type: userConstants.GET_DETAIL_REQUEST, id, data };
    }
    function success(id, data) {
        return { type: userConstants.GET_DETAIL_SUCCESS, id, data };
    }
    function failure(error) {
        return { type: userConstants.GET_DETAIL_FAILURE, error };
    }
}

function updateDetail(id, data) {
    return (dispatch) => {
        dispatch(request(id, data));
        const fetchAPI = async () => {
            const result = await userService.updateDetail(id, data);
            if (result.status === 1) {
                dispatch(success(result.user));
                dispatch(alertActions.success("Cập nhật thành công"));
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error("Cập nhật không thành công"));
            }
            return result.status;
        };
        return fetchAPI();
    };
    function request(id, data) {
        return { type: userConstants.UPDATEDETAIL_REQUEST, id, data };
    }
    function success(id, data) {
        return { type: userConstants.UPDATEDETAILSUCCESS, id, data };
    }
    function failure(error) {
        return { type: userConstants.UPDATEDETAIL_FAILURE, error };
    }
}

function activeAccount(id) {
    return (dispatch) => {
        dispatch(request());
        const fetchAPI = async () => {
            const result = await userService.activeAccout(id);
            if (result.status === 1) {
                dispatch(success(result.user));
                dispatch(alertActions.success("Kích hoạt thành công"));
            } else {
                dispatch(failure(result.message));
                dispatch(alertActions.error("Kích hoạt không thành công"));
            }
            return result.status;
        };
        return fetchAPI();
    };
    function request() {
        return { type: userConstants.ACTIVEACCOUNT_REQUEST };
    }
    function success(user) {
        return { type: userConstants.ACTIVEACCOUNT_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.ACTIVEACCOUNT_FAILURE, error };
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
