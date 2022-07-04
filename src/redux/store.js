import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialState, reducers } from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   reducers,
   initialState,
   composeEnhancer(applyMiddleware(thunk))
);
