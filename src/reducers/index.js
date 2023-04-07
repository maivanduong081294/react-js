import { combineReducers } from "redux";

import { auth } from "./auth";
import { alert } from "./alert";
import { users } from "./users";

const rootReducer = combineReducers({
    auth,
    alert,
    users,
});

export default rootReducer;
