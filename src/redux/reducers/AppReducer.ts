const initial: IAppState = {
    appTitle: "REACT + TYPESCRIPT + HMR + REDUX",
};

function AppReducer(state = initial, action: IReduxAction = {type: "", payload: null}) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export {AppReducer};
