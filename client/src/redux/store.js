import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./rootreducer";

const middleware = [logger];

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;