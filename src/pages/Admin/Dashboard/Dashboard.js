import { alertActions } from "~/actions";
import { useLocation, useNavigate } from "react-router-dom";
import config from "~/config";
import { useDispatch } from "react-redux";

function AdminDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            admin{" "}
            <button
                onClick={() => {
                    dispatch(alertActions.success("Đăng xuất thành công"));
                    console.log(location);
                    navigate(config.routes.login, {
                        state: { redirectTo: location, alert: true },
                    });
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default AdminDashboard;
