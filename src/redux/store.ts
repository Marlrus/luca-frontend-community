import { createStore, applyMiddleware, Middleware } from "redux";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") middleware.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleware));
