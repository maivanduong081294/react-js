import config from "~/config";
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
        layout: null,
    },
    {
        path: config.routes.home,
        component: Homepage,
    },
];

const authenticationRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    },

    {
        path: config.routes.forgotPassword,
        component: ForgotPassword,
    },

    {
        path: config.routes.resetPassword,
        component: ResetPassword,
    },
];

const privateRoutes = [];

const adminRoutes = [
    {
        path: config.routes.admin,
        component: AdminDashboard,
    },
];

export { publicRoutes, authenticationRoutes, privateRoutes, adminRoutes };
