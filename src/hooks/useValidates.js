import * as Yup from "yup";
import { validateConstants } from "~/constants";

export const useLoginSchema = Yup.object().shape({
    username: Yup.string().required(validateConstants.REQUIRE),
    password: Yup.string()
        .min(4, validateConstants.MIN_LENGTH)
        .required(validateConstants.REQUIRE),
});

export const useRegisterSchema = Yup.object().shape({
    username: Yup.string().required(validateConstants.REQUIRE),
    email: Yup.string()
        .email(validateConstants.INVALID)
        .required(validateConstants.REQUIRE),
    password: Yup.string()
        .min(4, validateConstants.MIN_LENGTH)
        .required(validateConstants.REQUIRE),
    rePassword: Yup.string()
        .required(validateConstants.REQUIRE)
        .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
    policy: Yup.array()
        .min(1, "Bạn chưa đồng ý với điều khoản và chính sách")
        .required("Bạn chưa đồng ý với điều khoản và chính sách"),
});

export const useForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email(validateConstants.INVALID)
        .required(validateConstants.REQUIRE),
});

export const useResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(4, validateConstants.MIN_LENGTH)
        .required(validateConstants.REQUIRE),
    rePassword: Yup.string()
        .required(validateConstants.REQUIRE)
        .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp"),
});
