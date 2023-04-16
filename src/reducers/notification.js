import { notificationsConstants } from "~/constants";

const initialState = { total: 0, types: [] };

export function notifications(state = initialState, action) {
    switch (action.type) {
        case notificationsConstants.GET_BY_USER_REQUEST:
            return {
                loading: true,
            };
        case notificationsConstants.GET_BY_USER_SUCCESS:
            return { ...state, ...action.data };
        case notificationsConstants.GET_TYPES_SUCCESS:
            return { ...state, ...action.data };
        default:
            return state;
    }
}
