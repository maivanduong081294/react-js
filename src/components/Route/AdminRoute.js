import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "~/config";

function AdminRoute() {
    const auth = useSelector((state) => state.auth);
    const location = useLocation();
    return auth.loggedIn > 0 ? (
        <Outlet />
    ) : (
        <Navigate to={config.routes.login} state={{ redirectTo: location }} />
    );
}

export default AdminRoute;
