import axios from "axios";
import { Dispatch } from "react";
import { State } from "../store.types";
import {
  QuestionActionTypes,
  QuestionActions,
  QuestionGetResponse,
  QuestionResData,
} from "../types/question.types";

export const fectchQuestionsStartAction = () => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_START,
});

export const fectchQuestionsSuccessAction = (data: QuestionResData) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: data,
});

export const fetchQuestionsFailureAction = (errMessage: string) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: errMessage,
});

export const clearQuestionsStateAction = () => ({
  type: QuestionActionTypes.CLEAR_QUESTIONS_STATE,
});

export const fetchQuestionAsync = () => async (
  dispatch: Dispatch<QuestionActions>,
  getState: any
) => {
  try {
    const state: State = getState();
    const pagination = state.question.pagination;
    // Exit if no pages left
    if (!pagination.hasNextPage) return;

    dispatch(fectchQuestionsStartAction());
    const res: { data: QuestionGetResponse } = await axios({
      method: "get",
      url: "http://localhost:5000/question",
      params: {
        page: pagination.page,
        limit: pagination.limit,
      },
    });
    const questionsRes = res.data.data;
    dispatch(fectchQuestionsSuccessAction(questionsRes));
  } catch (err) {
    dispatch(fetchQuestionsFailureAction(err.message));
  }
};
