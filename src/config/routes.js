const adminUrl = process.env.REACT_APP_ADMIN_URL || "/admin";

const routes = {
    home: "/",
    following: "/following",
    profile: "/:nickname",
    upload: "/upload",
    search: "/search",
    message: "/message",
    login: "/dang-nhap",
    register: "/dang-ky",
    forgotPassword: "/quen-mat-khau",
    resetPassword: "/dat-lai-mat-khau",
    activeAccount: "/kich-hoat-tai-khoan",
    admin: adminUrl,
    adminNotifications: `${adminUrl}/thong-bao`,
    adminContacts: `${adminUrl}/lien-he`,
    adminProfile: `${adminUrl}/chinh-sua-thong-tin`,
};

export default routes;
