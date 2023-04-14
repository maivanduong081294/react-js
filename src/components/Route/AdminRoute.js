import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { alertActions } from "~/actions";
import config from "~/config";
import { useUser, useMeta, useAlert } from "~/hooks";

function AdminRoute() {
    const location = useLocation();
    const { state: locationState } = location;
    const dispatch = useDispatch();
    const [permission, setPermission] = useState(true);
    const [navigateTo, setNavigateTo] = useState(config.routes.login);
    useAlert.useClear();
    useMeta.useInitMeta({
        title: "Admin",
    });
    useLayoutEffect(() => {
        const auth = useUser.isLogin();
        if (!auth || auth.permission_id === useUser.customPermisionId()) {
            dispatch(alertActions.error("Đăng nhập thất bại"));
            setPermission(false);
            if (locationState && locationState.logged) {
                setNavigateTo(config.routes.home);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [permission]);
    return permission ? (
        <Outlet />
    ) : (
        <Navigate
            to={navigateTo}
            state={{ redirectTo: location, alert: true }}
        />
    );
}

export default AdminRoute;
