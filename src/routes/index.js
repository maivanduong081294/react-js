import config from "~/config";
import { NoSidebarLayout, SimpleCenterLayout } from "~/layouts";
import Homepage from "~/pages/Home";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
import AdminDashboard from "~/pages/Admin/Dashboard";
import NotFound from "~/pages/NotFound";
import ForgotPassword from "~/pages/ForgotPassword";
import ResetPassword from "~/pages/ResetPassword";

const publicRoutes = [
    {
        path: "*",
        component: NotFound,
        layout: NoSidebarLayout,
    },
    {
        path: config.routes.home,
        component: Homepage,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: SimpleCenterLayout,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: SimpleCenterLayout,
    },

    {
        path: config.routes.forgotPassword,
        component: ForgotPassword,
        layout: SimpleCenterLayout,
    },

    {
        path: config.routes.resetPassword,
        component: ResetPassword,
        layout: SimpleCenterLayout,
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
        component: NotFound,
        layout: NoSidebarLayout,
    },
];

export { publicRoutes, privateRoutes, adminRoutes };
