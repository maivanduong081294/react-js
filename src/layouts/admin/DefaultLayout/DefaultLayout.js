import React from "react";
import classNames from "classnames/bind";
import { Header } from "~/layouts/admin/components";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <div id="main">
                <Header></Header>
                <main className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <Sidebar></Sidebar>
                        <div className={cx("content")}>{children}</div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default DefaultLayout;
