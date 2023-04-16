import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Simple({ children, content, className, id, visible }) {
    const [arrow, setArrow] = useState(null);
    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[50, 200]}
            render={(attrs) => (
                <div
                    id={cx(id)}
                    className={cx("popup-wrapper", className)}
                    tabIndex="-1"
                    {...attrs}
                >
                    <div className={cx("popup-container")}>
                        <span
                            className={cx("popup-arrow")}
                            ref={setArrow}
                        ></span>
                        {content}
                    </div>
                </div>
            )}
            popperOptions={{
                modifiers: [
                    {
                        name: "arrow",
                        options: {
                            element: arrow, // can be a CSS selector too
                        },
                    },
                ],
            }}
        >
            {children}
        </Tippy>
    );
}

export default Simple;
