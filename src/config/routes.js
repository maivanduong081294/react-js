const adminUrl = process.env.REACT_APP_ADMIN_URL || "/admin";

const routes = {
    home: "/",
    following: "/following",
    profile: "/:nickname",
    upload: "/upload",
    search: "/search",
    message: "/message",
    login: "/login",
    admin: adminUrl,
};

export default routes;
