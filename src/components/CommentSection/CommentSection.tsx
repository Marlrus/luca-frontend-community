import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchQuestionAsync } from "../../redux/actions/question.actions";
import CommentHeader from "../CommentHeader/CommentHeader.component";
import QuestionCard from "../QuestionCard/QuestionCard.component";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";

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
}) => {
  useEffect(() => {
    fetchQuestionAsync();
  }, [fetchQuestionAsync]);

  return (
    <SectionContainer>
      <ScrollContentContainer>
        <ResponsiveContentGrid>
          <HeaderContainer>
            <CommentHeader />
            <QuestionCard />
          </HeaderContainer>
        </ResponsiveContentGrid>
      </ScrollContentContainer>
    </SectionContainer>
  );
};

const mapStateToProps = (state: State) => ({
  question: state.question,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<QuestionState, undefined, QuestionActions>
) => ({
  fetchQuestionAsync: () => dispatch(fetchQuestionAsync()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type CommentSectionProps = ConnectedProps<typeof connector>;

export default connector(CommentSection);
