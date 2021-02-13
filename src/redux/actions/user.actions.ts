import axios from "axios";
import { Dispatch } from "react";
import {
  UserActionTypes,
  CurrentUser,
  UserActions,
  UserGetResponse,
} from "../types/user.types";

export const signInStartAction = () => ({
  type: UserActionTypes.SIGN_IN_START,
});

export const signInSuccessAction = (data: CurrentUser) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: data,
});

export const signInFailureAction = (errMessage: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errMessage,
});

export const fetchUserAction = () => async (
  dispatch: Dispatch<UserActions>
) => {
  try {
    dispatch(signInStartAction());
    const res = await axios.get<UserGetResponse>("http://localhost:5000/user");
    const user = res.data.data;
    dispatch(signInSuccessAction(user));
  } catch (err) {
    dispatch(signInFailureAction(err.message));
  }
};
