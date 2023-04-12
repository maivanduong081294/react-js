import { metaConstant } from "~/constants";
export function meta(state = {}, action) {
    switch (action.type) {
        case metaConstant.SET_META:
            return { ...state, ...action.meta };
        case metaConstant.RESET_META:
            return {};
        default:
            return state;
    }
}
