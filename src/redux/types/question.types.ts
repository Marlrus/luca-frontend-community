import {
  fectchQuestionsStartAction,
  fetchQuestionsFailureAction,
  fectchQuestionsSuccessAction,
  clearQuestionsStateAction,
} from "../actions/question.actions";

export const QuestionActionTypes = {
  FETCH_QUESTIONS_START: "FETCH_QUESTIONS_START",
  FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_FAILURE: "FETCH_QUESTIONS_FAILURE",
  CLEAR_QUESTIONS_STATE: "CLEAR_QUESTIONS_STATE",
} as const;

export interface QuestionData {
  _id: string;
  username: string;
  user_avatar: string;
  user_id: string;
  course_name: string;
  course_id: string;
  question: string;
  details: string;
  creation_date: string;
}

export interface QuestionState {
  pagination: {
    page: number;
    hasNextPage: boolean;
    limit: number;
  };
  questions: QuestionData[];
  fetching: boolean;
  error: string | undefined;
}

export interface PaginationData {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: number;
}

export interface QuestionResData {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
  docs: QuestionData[];
}

export interface QuestionGetResponse {
  success: boolean;
  data: QuestionResData;
}

export type QuestionActions =
  | ReturnType<typeof fectchQuestionsStartAction>
  | ReturnType<typeof fetchQuestionsFailureAction>
  | ReturnType<typeof fectchQuestionsSuccessAction>
  | ReturnType<typeof clearQuestionsStateAction>;
