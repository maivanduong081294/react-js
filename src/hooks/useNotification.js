import {
    faFileInvoice,
    faComment,
    faStar,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { store } from "~/helpers";

const getMetaType = (type_id) => {
    const { types } = store.getState().notifications;
    let data = {};
    if (types.length > 0) {
        types.forEach((item) => {
            if (type_id === item.id) {
                const title = item.name;
                const type = item.key;
                let icon = faFileInvoice;
                if (item.id === 2) {
                    icon = faStar;
                } else if (item.id === 3) {
                    icon = faComment;
                } else if (item.id === 4) {
                    icon = faUser;
                }
                data = {
                    title,
                    type,
                    icon,
                };
                return data;
            }
        });
    }
    return data;
};

export const useNotification = {
    getMetaType,
};
