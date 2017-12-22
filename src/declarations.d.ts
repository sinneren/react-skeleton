interface IReduxAction {
    type: string,
    payload: any,
}

// REDUX STATE
interface IStore {
    appState: IAppState;
}

interface IAppState {
    appTitle: string,
}
