import { metaConstant } from "~/constants";
const setTitle = (title) => {
    return (dispatch) => {
        dispatch(setMeta("title", title));
    };
};

const setRobots = (robots) => {
    return (dispatch) => {
        dispatch(setMeta("robots", robots));
    };
};

const setMeta = (key, value) => {
    return { type: metaConstant.SET_META, meta: { [key]: value } };
};

const setMetas = (meta) => {
    return { type: metaConstant.SET_META, meta };
};

const resetMeta = () => {
    return { type: metaConstant.RESET_META };
};

export const metaActions = {
    setTitle,
    setRobots,
    setMeta,
    setMetas,
    resetMeta,
};
