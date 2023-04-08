import { memo, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import md5 from "md5";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { userActions } from "~/actions";
import config from "~/config";
import { isLogin } from "~/hooks";
import { Input } from "~/components/Form";

const cx = classNames.bind(styles);

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [resetLogin, setResetLogin] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();

    useEffect(() => {
        if (isLogin() && resetLogin === 0) {
            setResetLogin(1);
            dispatch(userActions.logout());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = async (username, password) => {
        password = md5(password);
        const loggingIn = await dispatch(userActions.login(username, password));
        let redirect = config.routes.admin;
        if (locationState) {
            let { redirectTo } = locationState;
            redirect = `${redirectTo.pathname}${redirectTo.search}`;
        }
        if (loggingIn === 1) {
            navigate(redirect);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <Input
                validate="true"
                type="number"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength="3"
                maxLength="8"
                min="3.5"
                required
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

export default memo(Login);
