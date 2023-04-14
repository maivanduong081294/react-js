import { memo, useEffect, useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import FormikErrorFocus from "formik-error-focus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./ResetPassword.module.scss";

import { alertActions, userActions } from "~/actions";
import config from "~/config";
import { useAES, useMeta, useResetPasswordSchema } from "~/hooks";
import { FormInput, FormSubmit } from "~/components/Form";
import Title from "~/components/Title";
import { userService } from "~/services";

const cx = classNames.bind(styles);

function ResetPassword(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [userId, setUserId] = useState();
    const [message, setMessage] = useState("");
    const token = searchParams.get("token");

    useEffect(() => {
        const fetchAPI = async () => {
            if (token) {
                const user = useAES.decrypt(token.replace(/ /g, "+"));
                let message = "";
                if (user.id === undefined) {
                    message = "Không tìm thấy tài khoản";
                } else {
                    const userData = await userService.getDetail(user.id);
                    if (userData && userData.reset_password === 0) {
                        message = "Tài khoản của bạn đã đặt lại mật khẩu rồi";
                    } else {
                        setUserId(user.id);
                    }
                }
                if (message) {
                    dispatch(alertActions.error(message));
                    setMessage(message);
                }
            }
        };
        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useMeta.useSetMeta({ title: "Đặt lại mật khẩu" });

    return (
        <div className={cx("wrapper")}>
            <Title Comp="h2" title="Đặt lại mật khẩu" />
            <Formik
                initialValues={{
                    password: "",
                    rePassword: "",
                }}
                validationSchema={useResetPasswordSchema}
                onSubmit={async (values) => {
                    if (userId) {
                        const result = await dispatch(
                            userActions.resetPassword(userId, values.password)
                        );
                        if (result === 1) {
                            navigate(config.routes.login, {
                                state: {
                                    alert: true,
                                },
                            });
                        }
                    } else {
                        dispatch(alertActions.error(message));
                    }
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faLock} />}
                            name="password"
                            type="password"
                            placeholder="Mật khẩu mới"
                            errors={errors}
                            touched={touched}
                        />
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faLock} />}
                            name="rePassword"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            errors={errors}
                            touched={touched}
                        />
                        <FormSubmit
                            label="Đặt lại mật khẩu"
                            disabled={isSubmitting}
                        />
                        <FormikErrorFocus
                            offset={0}
                            align={"top"}
                            focusDelay={100}
                            ease={"linear"}
                            duration={100}
                        />
                    </Form>
                )}
            </Formik>
            <div className={cx("register")}>
                Bạn đã nhớ lại mật khẩu?{" "}
                <Link to={config.routes.login}>Đăng nhập</Link>
            </div>
        </div>
    );
}

export default memo(ResetPassword);
