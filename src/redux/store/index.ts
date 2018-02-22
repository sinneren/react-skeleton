import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";

// WEBPACK ENVIRONMENT VARIABLE
declare const __DEV__: boolean;

// STORE CONFIGURATIONS
const storeEnhancers: any = [];
const middlewares: any = [];

// apply middlewares
storeEnhancers.push(applyMiddleware(...middlewares));

// add dev-tools storeEnhancer
if (__DEV__) {
  const debugEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
  storeEnhancers.push(debugEnhancer);
}

export default function configureStore(initialState: any) {
  // base store configuration
  const store = createStore(
    rootReducer,
    initialState,
    compose(...storeEnhancers),
  );

  // enable hot reload
  if (__DEV__ && module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers").default),
    );
  }

  return store;
}
