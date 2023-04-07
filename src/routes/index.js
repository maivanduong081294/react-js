import config from "~/config";
import { NoSidebarLayout } from "~/layouts";
import Homepage from "~/pages/Home";
import AdminDashboard from "~/pages/Admin/Dashboard";
import Page404 from "~/pages/Page404";

const publicRoutes = [
    {
        path: "*",
        component: Page404,
        layout: NoSidebarLayout,
    },
    {
        path: config.routes.home,
        component: Homepage,
    },
    {
        path: config.routes.login,
        component: AdminDashboard,
    },
];

const privateRoutes = [];

const adminRoutes = [
    {
        path: config.routes.admin,
        component: AdminDashboard,
    },
    {
        path: `${config.routes.admin}/*`,
        component: Page404,
        layout: NoSidebarLayout,
    },
];

export { publicRoutes, privateRoutes, adminRoutes };
