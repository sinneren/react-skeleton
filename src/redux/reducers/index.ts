import { AppReducer } from "./AppReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    appState: AppReducer,
});

export { rootReducer };
