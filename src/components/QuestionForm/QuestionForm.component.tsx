import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";
import GameButton from "../GameButton/GameButton.component";
import TextInput from "../TextInput/TextInput.component";
import TextAreaInput from "../TextAreaInput/TextAreaInput.component";
import CloseButton from "../CloseButton/CloseButton.component";
import { useMediaQuery } from "react-responsive";

import { minWidthQueries } from "../../StyleConstants";
import {
  FormContainer,
  FormHeader,
  InputContainer,
  ButtonContainer,
} from "./QuestionForm.styles";

const QuestionForm: React.FC<RouteComponentProps> = ({ history }) => {
  const isDesktop = useMediaQuery(minWidthQueries.desktop);
  return (
    <ResponsiveContentGrid>
      <FormContainer>
        <FormHeader>
          Haz una pregunta
          {isDesktop && (
            <GameButton
              buttonType="secondary"
              label="CANCELAR"
              onClick={() => history.push("/community")}
            />
          )}
          {!isDesktop && (
            <CloseButton onClick={() => history.push("/community")} />
          )}
        </FormHeader>
        <InputContainer>
          <TextInput
            placeholder="Escribe tu título aquí"
            label="Título de publicación"
          />
        </InputContainer>
        <InputContainer>
          <TextAreaInput
            placeholder="Escribe tu publicación aquí"
            label="Publicación"
            rows={9}
          />
        </InputContainer>
        <ButtonContainer>
          <GameButton label="PUBLICAR" fillDiv={isDesktop ? false : true} />
        </ButtonContainer>
      </FormContainer>
    </ResponsiveContentGrid>
  );
};

export default withRouter(QuestionForm);
