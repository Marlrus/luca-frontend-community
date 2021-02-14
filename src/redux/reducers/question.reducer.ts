import { Reducer } from "react";
import {
  QuestionActionTypes,
  QuestionActions,
  QuestionState,
} from "../types/question.types";

export const INITIAL_STATE: QuestionState = {
  fetching: false,
  questions: [
    {
      username: "",
      user_avatar: "",
      user_id: "",
      course_name: "",
      course_id: "",
      question: "",
      details: "",
      creation_date: "",
    },
  ],
  pagination: {
    totalDocs: 0,
    limit: 15,
    totalPages: 0,
    page: 1,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    nextPage: 2,
  },
  error: undefined,
};

const questionReducer: Reducer<QuestionState, QuestionActions> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS_START:
      return {
        ...state,
        fetching: true,
      };
    case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
      const { docs, ...rest } = action.payload;
      return {
        ...state,
        fetching: false,
        pagination: {
          ...rest,
        },
        questions: {
          ...state.questions,
          ...docs,
        },
      };
    case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
