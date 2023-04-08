import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "~/config";
import { isLogin } from "~/hooks";

function AdminRoute() {
    const location = useLocation();
    return isLogin() ? (
        <Outlet />
    ) : (
        <Navigate to={config.routes.login} state={{ redirectTo: location }} />
    );
}

export default AdminRoute;
