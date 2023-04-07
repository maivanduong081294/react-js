import React from "react";
import classNames from "classnames/bind";
import { Header } from "~/layouts/admin/components";
import styles from "./NoSidebarLayout.module.scss";

const cx = classNames.bind(styles);

function NoSidebarLayout({ children }) {
    return (
        <React.Fragment>
            <div id="main">
                <Header></Header>
                <main className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("content")}>{children}</div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default NoSidebarLayout;
