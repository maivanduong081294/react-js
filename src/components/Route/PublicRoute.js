import { Outlet } from "react-router-dom";
import { useMeta, useAlert } from "~/hooks";
import Maintenance from "~/pages/Maintenance";

const PublicRoute = () => {
    useMeta.useInitMeta();
    useAlert.useClear();
    const maintenance = true;
    return maintenance ? <Maintenance /> : <Outlet />;
};

export default PublicRoute;
