import { memo, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import FormikErrorFocus from "formik-error-focus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Register.module.scss";

import { userActions } from "~/actions";
import config from "~/config";
import { useUser, useRegisterSchema } from "~/hooks";
import { FormInput, FormSubmit } from "~/components/Form";
import Title from "~/components/Title";

const cx = classNames.bind(styles);

function Login(props) {
    const [resetLogin, setResetLogin] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (useUser.isLogin() && resetLogin === 0) {
            setResetLogin(1);
            dispatch(userActions.logout());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx("wrapper")}>
            <Title Comp="h2" title="Đăng ký" />
            <Formik
                initialValues={{
                    email: "",
                    username: "",
                    password: "",
                    rePassword: "",
                    policy: "",
                }}
                validationSchema={useRegisterSchema}
                onSubmit={async (values) => {
                    const res = await dispatch(userActions.register(values));
                    if (res === 1) {
                        navigate(config.routes.login);
                    }
                }}
            >
                {({ values, errors, touched }) => (
                    <Form>
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faEnvelope} />}
                            name="email"
                            placeholder="Email"
                            errors={errors}
                            touched={touched}
                        />
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
                            iconLeft={<FontAwesomeIcon icon={faLock} />}
                            name="rePassword"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            errors={errors}
                            touched={touched}
                        />
                        <FormInput
                            className="text-left"
                            name="policy"
                            type="checkbox"
                            values={values}
                            errors={errors}
                            touched={touched}
                            value="1"
                        >
                            Đồng ý với điều khoản và chính sách
                        </FormInput>
                        <FormSubmit label="Đăng ký" />
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
                Bạn đã có tài khoản?{" "}
                <Link to={config.routes.login}>Đăng nhập</Link>
            </div>
        </div>
    );
}

export default memo(Login);
