import { Navigate, Outlet, useLocation } from "react-router-dom";
import config from "~/config";
import { useUser, useMeta, useAlert } from "~/hooks";

function AdminRoute() {
    const location = useLocation();
    useAlert.useClear();
    useMeta.useInitMeta({
        title: "Admin",
    });
    return useUser.isLogin() ? (
        <Outlet />
    ) : (
        <Navigate to={config.routes.login} state={{ redirectTo: location }} />
    );
}

export default AdminRoute;
