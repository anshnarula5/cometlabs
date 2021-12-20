import { combineReducers } from "redux";
import { getDataReducer } from "./dataReducers";

import { toggle } from "./toggleReducer";

const rootReducer = combineReducers({ toggle, data: getDataReducer });

export default rootReducer;
