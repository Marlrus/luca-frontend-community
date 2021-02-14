import { UserState } from "./types/user.types";
import { QuestionState } from "./types/question.types";

export interface State {
  user: UserState;
  question: QuestionState;
}
