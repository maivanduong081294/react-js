import { memo, useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import FormikErrorFocus from "formik-error-focus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Register.module.scss";

import { userActions } from "~/actions";
import config from "~/config";
import { isLogin, useDocumentTitle, useLoginSchema } from "~/hooks";
import { FormInput, FormSubmit } from "~/components/Form";
import Title from "~/components/Title";

const cx = classNames.bind(styles);

function Login(props) {
    const [resetLogin, setResetLogin] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state: locationState } = useLocation();

    useDocumentTitle("Login Page");

    useEffect(() => {
        if (isLogin() && resetLogin === 0) {
            setResetLogin(1);
            dispatch(userActions.logout());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx("wrapper")}>
            <Title Comp="h2" title="Đăng nhập" />
            <Formik
                initialValues={{ username: "", password: "", remember: "" }}
                validationSchema={useLoginSchema}
                onSubmit={async (values) => {
                    const loggingIn = await dispatch(
                        userActions.login(values.username, values.password)
                    );
                    let redirect = config.routes.admin;
                    if (locationState) {
                        let { redirectTo } = locationState;
                        redirect = `${redirectTo.pathname}${redirectTo.search}`;
                    }
                    if (loggingIn === 1) {
                        navigate(redirect);
                    }
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faUser} />}
                            name="username"
                            placeholder="Tên đăng nhập"
                            errors={errors}
                            touched={touched}
                        />
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faLock} />}
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            errors={errors}
                            touched={touched}
                        />
                        <FormInput
                            className="text-left"
                            name="remember"
                            type="checkbox"
                            values={values}
                            errors={errors}
                            touched={touched}
                            value="1"
                        >
                            Tự động đăng nhập
                        </FormInput>
                        <FormSubmit label="Đăng nhập" />
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
                Bạn chưa có tài khoản?{" "}
                <Link to={config.routes.register}>Đăng ký</Link>
            </div>
        </div>
    );
}

export default memo(Login);
