import { useState } from "react";
import { useNavigate, useLocation, Link, redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import md5 from "md5";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { userActions } from "~/actions";

const cx = classNames.bind(styles);

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();

    const handleLogin = (username, password) => {
        password = md5(password);
        let redirect = "";
        if (locationState) {
            let { redirectTo } = locationState;
            redirect = `${redirectTo.pathname}${redirectTo.search}`;
        }
        dispatch(userActions.login(username, password, redirect));
    };
    return (
        <div>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleLogin(username, password)}>
                Login
            </button>
            <Link to="/admin">Admin</Link>
        </div>
    );
}

export default Login;
