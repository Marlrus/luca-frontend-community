import { Reducer } from "react";
import { UserActionTypes, UserState, UserActions } from "../types/user.types";

export const INITIAL_STATE = {
  fetching: false,
  user: {
    courses: [],
    _id: "",
    name: "",
    last_name: "",
    username: "",
    email: "",
    avatar: "",
    enrollment_date: "",
  },
  error: undefined,
};

const userReducer: Reducer<UserState, UserActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
      return {
        ...state,
        fetching: true,
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        fetching: false,
        user: action.payload,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
