import axios from "axios";
import { Dispatch } from "react";
import {
  QuestionActionTypes,
  QuestionActions,
  QuestionGetResponse,
} from "../types/question.types";

export const fectchQuestionsStartAction = () => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_START,
});

export const fectchQuestionsSuccessAction = (data: any) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: data,
});

export const fetchQuestionsFailureAction = (errMessage: string) => ({
  type: QuestionActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: errMessage,
});

export const fetchQuestionAsync = () => async (
  dispatch: Dispatch<QuestionActions>
) => {
  try {
    dispatch(fectchQuestionsStartAction());
    const res = await axios.get<QuestionGetResponse>(
      "http://localhost:5000/question"
    );
    const questionsRes = res.data.data;
    console.log(questionsRes);
    dispatch(fectchQuestionsSuccessAction(questionsRes));
  } catch (err) {
    dispatch(fetchQuestionsFailureAction(err.message));
  }
};
