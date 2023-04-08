export const validateField = (event) => {
    const EMAIL_REGEX = new RegExp(/\S+@\S+\.\S+/);
    const PHONE_REGEX = new RegExp(
        /((84+([0-9]{9}))|(0[3|5|7|8|9]+([0-9]{8})))\b/g
    );
    const target = event.target;
    const type = event.target.attributes["type"].value;
    const value = target.value;
    const numberValue = parseFloat(value);
    const required = target.required;
    const maxLength = parseInt(target.maxLength);
    const minLength = parseInt(target.minLength);
    const max = target.max;
    const min = target.min;
    if (required && !value) {
        return "Đây là nội dung bắt buộc";
    } else if (
        type !== "number" &&
        maxLength > 0 &&
        minLength > 0 &&
        (value.length > maxLength || value.length < minLength)
    ) {
        return `Nội dung phải từ ${minLength} đến ${maxLength} ký tự`;
    } else if (type !== "number" && maxLength > 0 && value.length > maxLength) {
        return `Nội dung không được vượt quá ${maxLength} ký tự`;
    } else if (type !== "number" && minLength > 0 && value.length < minLength) {
        return `Nội dung không được ít hơn ${minLength} ký tự`;
    } else if (
        type === "number" &&
        max !== "" &&
        min !== "" &&
        (numberValue > parseFloat(max) || numberValue < parseFloat(min))
    ) {
        return `Giá trị phải từ ${min} đến ${max}`;
    } else if (type === "number" && max !== "" && value > parseFloat(max)) {
        return `Giá trị phải nhỏ hơn ${max}`;
    } else if (type === "number" && min !== "" && value < parseFloat(min)) {
        return `Giá trị phải lớn hơn ${min}`;
    } else if (type === "email" && !EMAIL_REGEX.test(value)) {
        return "Nội dung phải là email";
    } else if (type === "phone" && !PHONE_REGEX.test(value)) {
        return "Nội dung phải là số điện thoại";
    }
    return "";
};
