import {
  fectchQuestionsStartAction,
  fetchQuestionsFailureAction,
  fectchQuestionsSuccessAction,
} from "../actions/question.actions";

export const QuestionActionTypes = {
  FETCH_QUESTIONS_START: "FETCH_QUESTIONS_START",
  FETCH_QUESTIONS_SUCCESS: "FETCH_QUESTIONS_SUCCESS",
  FETCH_QUESTIONS_FAILURE: "FETCH_QUESTIONS_FAILURE",
} as const;

export interface QuestionData {
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
  pagination: PaginationData;
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

export interface QuestionGetResponse extends PaginationData {
  success: boolean;
  data: {
    docs: QuestionData[];
  };
}

export type QuestionActions =
  | ReturnType<typeof fectchQuestionsStartAction>
  | ReturnType<typeof fetchQuestionsFailureAction>
  | ReturnType<typeof fectchQuestionsSuccessAction>;
