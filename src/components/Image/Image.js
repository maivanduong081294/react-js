import { forwardRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Image(
    {
        src,
        alt,
        circle,
        className,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref
) {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={cx(className, { circle })}
            src={fallback || src}
            {...props}
            onError={handleError}
            alt={alt}
        />
    );
}

export default forwardRef(Image);
