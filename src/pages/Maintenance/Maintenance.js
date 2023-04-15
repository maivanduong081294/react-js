import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styles from "./Maintenance.module.scss";
import Button from "~/components/Button/Button";
import config from "~/config";

const cx = classNames.bind(styles);
function Maintenance() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("main")}>
                    <ul className={cx("maintenance-icons")}>
                        <li>
                            <FontAwesomeIcon icon={faCog} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCog} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCog} />
                        </li>
                    </ul>
                    <h1 className={cx("title")}>MAINTENANCE</h1>
                    <p className={cx("description")}>
                        Trang web của chúng tôi Hiện đang được bảo trì Chúng tôi
                        sẽ quay lại trong thời gian ngắn
                        <br />
                        Cảm ơn bạn đã kiên nhẫn
                    </p>
                    <Button to={config.routes.home} primary uppercase>
                        Quay lại trang chủ
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Maintenance;
