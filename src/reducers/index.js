import { combineReducers } from "redux";

import { auth } from "./auth";
import { alert } from "./alert";
import { users } from "./users";
import { meta } from "./meta";
import { notifications } from "./notification";

const rootReducer = combineReducers({
    auth,
    alert,
    users,
    meta,
    notifications,
});

export default rootReducer;
