import classNames from "classnames/bind";
import style from "./Form.module.scss";
import Button from "../Button/Button";

const cx = classNames.bind(style);

function FormSubmit({ label, disabled, ...props }) {
    return (
        <div className={cx("wrapper")}>
            <Button type="submit" disabled={disabled} {...props}>
                {label}
            </Button>
        </div>
    );
}

export default FormSubmit;
