import { combineReducers } from "redux";

import { auth } from "./auth";
import { alert } from "./alert";
import { users } from "./users";
import { meta } from "./meta";

const rootReducer = combineReducers({
    auth,
    alert,
    users,
    meta,
});

export default rootReducer;
