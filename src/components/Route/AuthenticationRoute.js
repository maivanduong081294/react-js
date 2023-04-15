import { Outlet } from "react-router-dom";
import { useMeta, useAlert } from "~/hooks";

const AuthenticationRoute = () => {
    useMeta.useInitMeta();
    useAlert.useClear();
    return <Outlet />;
};

export default AuthenticationRoute;
