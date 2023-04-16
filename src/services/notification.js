import { get } from "~/utils/httpRequest";

const getByUser = async (userId) => {
    try {
        const res = await get(`notifications/user/${userId}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getTotalUser = async (userId, status = "") => {
    try {
        const res = await get(`notifications/user/${userId}/total/${status}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getNotificationsTypes = async () => {
    try {
        const res = await get(`notifications/types`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const notificationsService = {
    getByUser,
    getTotalUser,
    getNotificationsTypes,
};
