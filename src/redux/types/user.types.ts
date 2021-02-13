import {
  signInStartAction,
  signInSuccessAction,
  signInFailureAction,
  fetchUserAction,
} from "../actions/user.actions";

export const UserActionTypes = {
  SIGN_IN_START: "SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
} as const;

export interface CurrentUser {
  courses: string[];
  _id: string;
  name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  enrollment_date: string;
}

export interface UserState {
  user: CurrentUser;
  fetching: boolean;
  error: string | undefined;
}

export interface UserGetResponse {
  success: string;
  data: CurrentUser;
}

export type UserActions =
  | ReturnType<typeof signInStartAction>
  | ReturnType<typeof signInSuccessAction>
  | ReturnType<typeof signInFailureAction>;
