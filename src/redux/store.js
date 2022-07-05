import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { initialState, reducers } from "./reducers";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({ form: formReducer, reducers });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   allReducers,
   initialState,
   composeEnhancer(applyMiddleware(thunk))
);
