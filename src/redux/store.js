import { createStore } from "redux";
import { initialState, reducers } from "./reducers";

export const store = createStore(
   reducers,
   initialState,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
