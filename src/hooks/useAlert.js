import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { alertActions } from "~/actions";

const useClear = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(alertActions.clear());
    }, [location]);
};

export const useAlert = {
    useClear,
};
