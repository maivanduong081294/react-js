import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./NotificationsHeader.module.scss";
import { notificationsService } from "~/services";
import { Link, useNavigate } from "react-router-dom";
import config from "~/config";
import Button from "~/components/Button";
import { useNotification } from "~/hooks";

const cx = classNames.bind(styles);

function NotificationsHeader() {
    const [init] = useState();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const { id: userId } = useSelector((state) => state.auth.user);
    const { total } = useSelector((state) => state.notifications);

    const handleClick = () => {
        navigate(config.routes.adminNotifications);
    };

    const Render = () => {
        if (data !== undefined) {
            return (
                <>
                    <div className={cx("header")}>
                        Thông báo
                        {(total && <span>{total}</span>) || ""}
                    </div>
                    <ul className={cx("list")}>
                        {data.map((item) => {
                            const {
                                title: titleNotification,
                                icon: iconNotification,
                                type,
                            } = useNotification.getMetaType(item.type_id);
                            const actived =
                                item.status === "1" ? "actived" : "";
                            return (
                                <li
                                    className={cx(
                                        "item",
                                        `item-${type}`,
                                        actived
                                    )}
                                    key={item.id}
                                >
                                    <div className={cx("icon")}>
                                        {iconNotification && (
                                            <FontAwesomeIcon
                                                icon={iconNotification}
                                            />
                                        )}
                                    </div>
                                    <div className={cx("content")}>
                                        <div className={cx("title")}>
                                            {titleNotification}
                                        </div>
                                        <div className={cx("description")}>
                                            {item.name}
                                        </div>
                                    </div>
                                    {item.status === "0" && (
                                        <div className={cx("check")}>
                                            <FontAwesomeIcon icon={faCircle} />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                        <li>
                            <Button full text onClick={handleClick}>
                                Tất cả
                            </Button>
                        </li>
                    </ul>
                </>
            );
        } else {
            return <div className={cx("empty")}>Chưa có thông báo</div>;
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const list = await notificationsService.getByUser(userId);
            setData(list.data);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init]);

    return (
        <div>
            <Render />
        </div>
    );
}

export default memo(NotificationsHeader);
