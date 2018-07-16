import { IReduxAction } from "../interfaces";
import { IAppState } from "./interfaces";

const initial: IAppState = {
    appTitle: "React Boilerplate",
};

function AppReducer(state = initial, action: IReduxAction = {type: "", payload: null}) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export {AppReducer};
