import { Link } from "react-router-dom";
import config from "~/config";

function Home() {
    return (
        <div>
            Homepage
            <Link to={config.routes.admin}>Admin</Link>
            <Link to={config.routes.login}>Đăng nhập</Link>
        </div>
    );
}

export default Home;
