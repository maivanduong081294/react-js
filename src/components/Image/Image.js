import { forwardRef, useState } from "react";
import images from "~/assets/images";

function Image(
    {
        src,
        alt,
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
            className={className}
            src={fallback || src}
            {...props}
            onError={handleError}
            alt={alt}
        />
    );
}

export default forwardRef(Image);
