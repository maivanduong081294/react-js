import { userActions } from "~/actions";
import { useNavigate } from "react-router-dom";
import config from "~/config";

function AdminDashboard() {
    const navigate = useNavigate();
    return (
        <div>
            admin{" "}
            <button
                onClick={() => {
                    userActions.logout();
                    navigate(config.routes.login);
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default AdminDashboard;
