import { notificationsConstants } from "~/constants";
import { notificationsService } from "~/services";

export const notificationActions = {
    getHeaderNotifications,
    getNotificationsTypes,
};
function getHeaderNotifications(userId) {
    return (dispatch) => {
        const fetchAPI = async () => {
            const result = await notificationsService.getTotalUser(userId, 0);
            let total = 0;
            if (result.status === 1 && result.data.count > 0) {
                total = result.data.count;
            }
            dispatch(success({ total: total }));
        };
        return fetchAPI();
    };
    function success(data) {
        return { type: notificationsConstants.GET_BY_USER_SUCCESS, data };
    }
}

function getNotificationsTypes() {
    return (dispatch) => {
        const fetchAPI = async () => {
            const result = await notificationsService.getNotificationsTypes();
            if (result.status === 1 && result.data.length > 0) {
                dispatch(success({ types: result.data }));
            }
        };
        return fetchAPI();
    };
    function success(data) {
        return { type: notificationsConstants.GET_TYPES_SUCCESS, data };
    }
}
