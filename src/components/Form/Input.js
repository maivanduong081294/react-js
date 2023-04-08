import { useEffect, useState } from "react";
import { validateField } from "~/hooks";

function Input({ label = "", validate = "", onChange, ...passProps }) {
    const [error, setError] = useState("");

    const handleChange = (e) => {
        if (validate === "true") {
            setError(validateField(e));
        }
        onChange(e);
    };

    return (
        <div className="form-input">
            {label ? <label>{label}</label> : ""}
            <input onChange={handleChange} {...passProps} />
            {error ? <div className="message">{error}</div> : ""}
        </div>
    );
}

export default Input;
