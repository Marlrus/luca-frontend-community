import React from "react";
import NavAndHeaderOverlay from "../../components/NavAndHeaderOverlay/NavAndHeaderOverlay.component";
import QuestionForm from "../../components/QuestionForm/QuestionForm.component";

import {
  QuestionFormContainer,
  ScrollContentContainer,
} from "./QuestionFormPage.styles";

const QuestionFormPage: React.FC = () => {
  return (
    <QuestionFormContainer>
      <NavAndHeaderOverlay>
        <ScrollContentContainer>
          <QuestionForm />
        </ScrollContentContainer>
      </NavAndHeaderOverlay>
    </QuestionFormContainer>
  );
};

export default QuestionFormPage;
