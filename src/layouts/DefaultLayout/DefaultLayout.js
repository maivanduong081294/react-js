import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <React.Fragment>
            <div id="main">
                <main className={cx("wrapper")}>
                    <div className={cx("container")}>
                        <div className={cx("content")}>{children}</div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}

export default DefaultLayout;
