import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SimpleCenterLayout.module.scss";
import config from "~/config";
import Image from "~/components/Image";
import images from "~/assets/images";
import Alert from "~/components/Alert";

const cx = classNames.bind(styles);

function SimpleCenterLayout({ children, ...props }) {
    return (
        <div id="main">
            <div className={cx("wrapper")}>
                <div className={cx("container")}>
                    <div className={cx("content")}>
                        <Alert />
                        <header className={cx("header")}>
                            <Link
                                className={cx("logo")}
                                to={config.routes.home}
                            >
                                <Image src={images.Logo} alt="Logo" />
                            </Link>
                        </header>
                        <main className={cx("main")}>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleCenterLayout;
