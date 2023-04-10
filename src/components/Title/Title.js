import classNames from "classnames/bind";
import style from "./Title.module.scss";

const cx = classNames.bind(style);

function Title({ title, Comp = "h1" }) {
    return <Comp className={cx("title")}>{title}</Comp>;
}

export default Title;
