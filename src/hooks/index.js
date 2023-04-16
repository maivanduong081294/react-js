export * from "./useValidates";
export * from "./useUser";
export * from "./useDebounce";
export * from "./useMeta";
export * from "./useAlert";
export * from "./useHash";
export * from "./useEmailTemplate";
export * from "./useNotification";

export const baseUrl = window.location.origin.toString();
export const getUrl = (pathname) => {
    return baseUrl + pathname;
};
