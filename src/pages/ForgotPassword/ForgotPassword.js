import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import FormikErrorFocus from "formik-error-focus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";

import { userActions } from "~/actions";
import config from "~/config";
import { useMeta, useForgotPasswordSchema } from "~/hooks";
import { FormInput, FormSubmit } from "~/components/Form";
import Title from "~/components/Title";

const cx = classNames.bind(styles);

function ForgotPassword(props) {
    const dispatch = useDispatch();

    useMeta.useSetMeta({ title: "Quên mật khẩu" });

    return (
        <div className={cx("wrapper")}>
            <Title Comp="h2" title="Quên mật khẩu" />
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={useForgotPasswordSchema}
                onSubmit={async (values) => {
                    await dispatch(userActions.forgotPassword(values.email));
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                        <FormInput
                            iconLeft={<FontAwesomeIcon icon={faEnvelope} />}
                            name="email"
                            placeholder="Email"
                            errors={errors}
                            touched={touched}
                            value={values.username}
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

export default memo(ForgotPassword);
