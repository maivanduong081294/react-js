import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { ErrorMessage, Field } from "formik";
import classNames from "classnames/bind";
import style from "./Form.module.scss";

const cx = classNames.bind(style);

function FormInput({
    className,
    label = "",
    name,
    type,
    iconLeft,
    iconRight,
    errors,
    values,
    touched,
    value,
    children,
    ...passProps
}) {
    let props = { ...passProps };
    let fieldClass = [];
    let checked = [];
    if (errors[name] && touched[name]) {
        fieldClass.push("field-error");
    }
    if (type === "checkbox" || type === "radio") {
        fieldClass.push("field-checkbox");
        iconLeft = null;
        iconRight = null;
        checked.push(faCircle);
        if (values[name] === value || values[name].includes(value)) {
            checked.push(faCircleCheck);
            props = { ...props, checked: true };
        }
        iconLeft = <FontAwesomeIcon icon={checked[checked.length - 1]} />;
    }
    return (
        <div className={cx("wrapper", className, fieldClass)}>
            <label>
                {label ? <span className={cx("label")}>{label}</span> : ""}
                <div className={cx("field")}>
                    {iconLeft ? (
                        <span
                            className={cx(
                                "icon",
                                checked.length > 1 && "checked"
                            )}
                        >
                            {iconLeft}
                        </span>
                    ) : (
                        ""
                    )}
                    <Field
                        name={name}
                        value={value}
                        type={type}
                        {...props}
                    ></Field>
                    {children}
                    {iconRight ? (
                        <span className={cx("icon")}>{iconRight}</span>
                    ) : (
                        ""
                    )}
                </div>
            </label>
            {errors[name] && touched[name] ? (
                <div className={cx("message")}>
                    <ErrorMessage name={name} />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default FormInput;
