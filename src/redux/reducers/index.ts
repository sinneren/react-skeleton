import { AppReducer } from "./AppReducer";

const { combineReducers }: any = require("redux");

const rootReducer = combineReducers({
    appState: AppReducer,
});

export {rootReducer};
