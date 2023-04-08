import { forwardRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { useTheme } from "~/Theme";

const cx = classNames.bind(styles);

function Button(
    {
        className,
        disabled,
        to,
        href,
        rounded,
        primary,
        secondary,
        text,
        small,
        full,
        left,
        onClick,
        children,
        imageLeft,
        imageRight,
        iconLeft,
        iconRight,
        shadow,
        icon,
        btn = true,
        wAuto,
        bold,
        separator,
        ...passProps
    },
    ref
) {
    const [stateTheme] = useTheme();
    const theme = stateTheme.theme;
    let Tag = "button";
    const classes = cx(
        {
            btn,
            primary,
            bold,
            small,
            full,
            disabled,
            rounded,
            secondary,
            text,
            shadow,
            left,
            icon,
            wAuto,
            separator,
        },
        className,
        theme
    );
    if (icon) {
        // classes.btn = false;
    }
    const props = {
        onClick,
        ...passProps,
    };

    let image = "";
    if (imageLeft) {
        image = imageLeft;
        imageLeft = true;
    }
    if (imageRight) {
        image = imageRight;
        imageRight = true;
    }

    if (to) {
        Tag = Link;
        props.to = to;
    } else if (href) {
        Tag = "a";
        props.href = href;
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    return (
        <Tag ref={ref} {...props} className={classes}>
            {(!icon && iconLeft) ||
                (imageLeft && <img src={image} alt={children} />)}
            {icon || <span>{children}</span>}
            {(!icon && iconRight) ||
                (imageRight && <img src={image} alt={children} />)}
        </Tag>
    );
}

export default forwardRef(Button);
