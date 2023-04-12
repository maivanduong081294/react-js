import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Alert.module.scss";

const cx = classNames.bind(styles);

function Alert() {
    const { alert } = useSelector((state) => state);
    return (
        <>
            {alert.message && (
                <div className={cx("alert", alert.type)}>{alert.message}</div>
            )}
        </>
    );
}

export default Alert;
