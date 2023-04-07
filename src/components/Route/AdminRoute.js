import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "~/config";
function AdminRoute() {
    const auth = useSelector((state) => state.auth);
    return auth.length > 0 ? <Outlet /> : <Navigate to={config.routes.login} />;
}

export default AdminRoute;
