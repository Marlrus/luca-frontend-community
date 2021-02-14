import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  fetchQuestionAsync,
  clearQuestionsStateAction,
} from "../../redux/actions/question.actions";
import CommentHeader from "../CommentHeader/CommentHeader.component";
import QuestionCard from "../QuestionCard/QuestionCard.component";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";
import Spinner from "../Spinner/Spinner.component";

// Types
import { ThunkDispatch } from "redux-thunk";
import { State } from "../../redux/store.types";
import {
  QuestionState,
  QuestionActions,
} from "../../redux/types/question.types";

import {
  SectionContainer,
  ScrollContentContainer,
  HeaderContainer,
} from "./CommentSection.styles";

const CommentSection: React.FC<CommentSectionProps> = ({
  fetchQuestionAsync,
  clearQuestionsState,
  question,
  user,
}) => {
  const { fetching } = question;

  useEffect(() => {
    fetchQuestionAsync();

    return () => {
      clearQuestionsState();
    };
  }, [fetchQuestionAsync]);

  const handleScroll = (e: any) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const bottom = scrollHeight - scrollTop === clientHeight;
    // check re-trigger and return
    if (fetching) return;
    if (bottom) fetchQuestionAsync();
  };

  return (
    <SectionContainer>
      <ScrollContentContainer onScroll={handleScroll}>
        <ResponsiveContentGrid>
          <HeaderContainer>
            <CommentHeader>
              {question.questions.map((question) => (
                <QuestionCard
                  commentNumber={Math.round(Math.random() * 300)}
                  key={question._id}
                  {...question}
                  fromSameUser={question.user_id === user._id}
                />
              ))}
              {fetching && <Spinner />}
            </CommentHeader>
          </HeaderContainer>
        </ResponsiveContentGrid>
      </ScrollContentContainer>
    </SectionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  question: state.question,
  user: state.user.user,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<QuestionState, undefined, QuestionActions>
) => ({
  fetchQuestionAsync: () => dispatch(fetchQuestionAsync()),
  clearQuestionsState: () => dispatch(clearQuestionsStateAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CommentSectionProps = ConnectedProps<typeof connector>;

export default connector(CommentSection);
