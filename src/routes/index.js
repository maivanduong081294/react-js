import { AdminLayout } from "~/layouts";

import { AdminDashboard } from "~/pages/Admin/Dashboard";
import config from "~/config";

const publicRoutes = [
    {
        path: config.routes.admin,
        component: AdminDashboard,
        layout: AdminLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
