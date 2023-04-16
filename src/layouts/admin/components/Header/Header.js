import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faBell } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Image from "~/components/Image";
import config from "~/config";
import Button from "~/components/Button/Button";
import { SimplePopper } from "~/components/Popper";
import { NotificationsHeader } from "~/components/admin/Notifications";
import { useEffect, useState } from "react";
import { notificationActions } from "~/actions";
import { MenuAuth } from "~/components/admin/Menu";

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const [init] = useState();
    const { id: userId } = useSelector((state) => state.auth.user);
    const { total: notificationsTotal } = useSelector(
        (state) => state.notifications
    );

    useEffect(() => {
        const fetchApi = async () => {
            await dispatch(notificationActions.getHeaderNotifications(userId));
            await dispatch(notificationActions.getNotificationsTypes());
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init]);
    const iconMenu = <FontAwesomeIcon icon={faAlignLeft} />;
    const iconNotifications = <FontAwesomeIcon icon={faBell} />;
    return (
        <header>
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <div className={cx("row")}>
                        <div className={cx("logo", "col")}>
                            <Link to={config.routes.home}>
                                <Image src={images.Logo} alt="Trang chủ" />
                            </Link>
                        </div>
                        <div className={cx("col")}>
                            <Button
                                className={cx("has-icon")}
                                wAuto
                                icon={iconMenu}
                            />
                        </div>
                        <div className={cx("right", "col")}>
                            <div className={cx("notifications")}>
                                <SimplePopper
                                    content={<NotificationsHeader />}
                                    visible={true}
                                >
                                    <Button
                                        className={cx("has-icon")}
                                        wAuto
                                        icon={iconNotifications}
                                    >
                                        <span>{notificationsTotal}</span>
                                    </Button>
                                </SimplePopper>
                            </div>
                            <div className={cx("auth")}>
                                <SimplePopper
                                    id="auth"
                                    content={<MenuAuth />}
                                    visible={true}
                                >
                                    <Image
                                        circle
                                        className={cx("avatar")}
                                        fallback={images.noAvatar}
                                        src={1}
                                    />
                                </SimplePopper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
