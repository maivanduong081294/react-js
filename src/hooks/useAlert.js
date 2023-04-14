import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { alertActions } from "~/actions";

const useClear = () => {
    const location = useLocation();
    const { state } = location;
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (state) {
            const { alert } = state;
            if (alert !== true) {
                dispatch(alertActions.clear());
            }
        } else {
            dispatch(alertActions.clear());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
};

export const useAlert = {
    useClear,
};
