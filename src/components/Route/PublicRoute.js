import { Outlet } from "react-router-dom";
import { useMeta, useAlert } from "~/hooks";

const PublicRoute = () => {
    useMeta.useInitMeta();
    useAlert.useClear();
    return <Outlet />;
};

export default PublicRoute;
