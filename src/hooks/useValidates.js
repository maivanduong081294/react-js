import * as Yup from "yup";
import { validateConstants } from "~/constants";

export const useLoginSchema = Yup.object().shape({
    username: Yup.string().required(validateConstants.REQUIRE),
    password: Yup.string()
        .min(4, validateConstants.MIN_LENGTH)
        .max(12, validateConstants.MAX_LENGTH)
        .required(validateConstants.REQUIRE),
});
