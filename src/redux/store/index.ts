import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers";

import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

/**
 * @author Rico Maier <rico.maier@etecture.de>
 */

// WEBPACK ENVIRONMENT VARIABLE
declare const __DEV__: boolean;

// BROWSER HISTORY
const history = createBrowserHistory();

// STORE CONFIGURATIONS
const storeEnhancers: any = [];
const middlewares: any = [];

// Add router middleware to sync redux with the routing history
middlewares.push(routerMiddleware(history));

// Promise middleware to handle pending, failed and successful requests with promise resolving
// middlewares.push(promiseMiddleware);
// middlewares.push(authMiddleware);

// apply middlewares
storeEnhancers.push(applyMiddleware(...middlewares));

// add dev-tools storeEnhancer
if (__DEV__) {
  const reduxExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  if (reduxExtension) {
    storeEnhancers.push(reduxExtension());
  }
}

export default function configureStore(initialState: any) {
  // base store configuration
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(...storeEnhancers),
  );

  return { store, history };
}
