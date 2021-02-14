import { combineReducers } from "redux";
import userReducer from "./reducers/user.reducer";
import questionReducer from "./reducers/question.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
});
