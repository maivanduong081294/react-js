import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { metaActions } from "~/actions";

const useDefaultMeta = (location) => {
    return {
        robots: "noindex",
        title: "Laptop Now",
    };
};

const useSetMeta = (meta) => {
    const location = useLocation();
    const dispatch = useDispatch();
    let defaultMeta = useDefaultMeta(location);
    useEffect(() => {
        dispatch(metaActions.setMetas({ ...defaultMeta, ...meta }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meta]);
};

const useInitMeta = (meta) => {
    const location = useLocation();
    const dispatch = useDispatch();
    let defaultMeta = useDefaultMeta(location);
    useLayoutEffect(() => {
        dispatch(metaActions.setMetas({ ...defaultMeta, ...meta }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
};

export const useMeta = {
    useSetMeta,
    useInitMeta,
};
