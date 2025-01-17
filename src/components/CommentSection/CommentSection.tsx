import React, { useEffect, Fragment } from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  fetchQuestionAsync,
  clearQuestionsStateAction,
} from "../../redux/actions/question.actions";
import CommentHeader from "../CommentHeader/CommentHeader.component";
import QuestionCard from "../QuestionCard/QuestionCard.component";
import QuestionCardCompact from "../QuestionCardCompact/QuestionCardCompact.component";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";
import Spinner from "../Spinner/Spinner.component";
import { useMediaQuery } from "react-responsive";

// Types
import { ThunkDispatch } from "redux-thunk";
import { State } from "../../redux/store.types";
import {
  QuestionState,
  QuestionActions,
} from "../../redux/types/question.types";

import { minWidthQueries } from "../../StyleConstants";
import {
  SectionContainer,
  ScrollContentContainer,
  HeaderContainer,
  NoResultsLeft,
  QuestionSeparator,
} from "./CommentSection.styles";

const CommentSection: React.FC<CommentSectionProps> = ({
  fetchQuestionAsync,
  clearQuestionsState,
  question,
  user,
}) => {
  const isDesktop = useMediaQuery(minWidthQueries.desktop);
  const { fetching } = question;

  useEffect(() => {
    fetchQuestionAsync();

    return () => {
      clearQuestionsState();
    };
  }, [fetchQuestionAsync, clearQuestionsState]);

  const handleScroll = (e: any) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const bottom = scrollHeight - scrollTop === clientHeight;
    // check re-trigger and return
    if (fetching) return;
    if (bottom) fetchQuestionAsync();
  };

  const noQuestionsLeft = question.pagination.hasNextPage === false;

  return (
    <SectionContainer>
      <ScrollContentContainer onScroll={handleScroll}>
        <ResponsiveContentGrid>
          <HeaderContainer>
            <CommentHeader>
              {isDesktop &&
                question.questions.map((question) => (
                  <Fragment key={`${question._id}${Math.random()}`}>
                    <QuestionCard
                      commentNumber={Math.round(Math.random() * 300)}
                      {...question}
                      fromSameUser={question.user_id === user._id}
                    />
                    <QuestionSeparator />
                  </Fragment>
                ))}
              {!isDesktop &&
                question.questions.map((question) => (
                  <Fragment key={`${question._id}${Math.random()}`}>
                    <QuestionSeparator />
                    <QuestionCardCompact
                      commentNumber={Math.round(Math.random() * 300)}
                      {...question}
                      fromSameUser={question.user_id === user._id}
                    />
                  </Fragment>
                ))}
              {fetching && <Spinner />}
              {noQuestionsLeft && (
                <NoResultsLeft>No quedan mas preguntas.</NoResultsLeft>
              )}
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
