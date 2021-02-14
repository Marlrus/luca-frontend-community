import { Reducer } from "react";
import {
  QuestionActionTypes,
  QuestionActions,
  QuestionState,
} from "../types/question.types";

export const INITIAL_STATE: QuestionState = {
  fetching: false,
  questions: [],
  pagination: {
    limit: 15,
    page: 1,
    hasNextPage: true,
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
          ...state.pagination,
          page: rest.nextPage,
          hasNextPage: rest.hasNextPage,
        },
        questions: [...state.questions, ...docs],
      };
    case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case QuestionActionTypes.CLEAR_QUESTIONS_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default questionReducer;
