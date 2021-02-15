import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { connect, ConnectedProps } from "react-redux";
import Axios from "axios";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";
import GameButton from "../GameButton/GameButton.component";
import TextInput from "../TextInput/TextInput.component";
import TextAreaInput from "../TextAreaInput/TextAreaInput.component";
import CloseButton from "../CloseButton/CloseButton.component";
import { Formik, Form } from "formik";
import { useMediaQuery } from "react-responsive";
import * as Yup from "yup";

import { State } from "../../redux/store.types";

import { minWidthQueries } from "../../StyleConstants";
import {
  FormContainer,
  FormHeader,
  InputContainer,
  ButtonContainer,
} from "./QuestionForm.styles";

const QuestionForm: React.FC<RouteComponentProps & ReduxProps> = ({
  history,
  user,
}) => {
  const isDesktop = useMediaQuery(minWidthQueries.desktop);
  const [submitting, setSubmitting] = useState<boolean>(false);

  return (
    <ResponsiveContentGrid>
      <Formik
        validationSchema={Yup.object().shape({
          question: Yup.string()
            .min(10, "La pregunta esta muy corta.")
            .required("Es mandatorio incluir una pregunta"),
          details: Yup.string()
            .min(25, "Incluye mas detalles en tu duda.")
            .required("Es mandatorio incluir una descripcion"),
        })}
        initialValues={{
          question: "",
          details: "",
        }}
        onSubmit={(values) => {
          const submitQuestion = async () => {
            setSubmitting(true);
            const { question, details } = values;
            const body = {
              user_id: user._id,
              course_id: user.courses[0],
              question,
              details,
            };
            await Axios({
              method: "post",
              url: "http://localhost:5000/question",
              data: body,
            });
            setSubmitting(false);
            history.push("/community");
          };
          submitQuestion();
        }}
      >
        {({ handleChange, values, handleBlur, errors, touched }) => (
          <FormContainer>
            {/* Extremely handy debugging strategy, leaving here to show :3
            <pre>{JSON.stringify(touched, null, 2)}</pre>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          */}
            <Form>
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
                  name="question"
                  value={values.question || ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.question}
                  touched={touched.question}
                />
              </InputContainer>
              <InputContainer>
                <TextAreaInput
                  placeholder="Escribe tu publicación aquí"
                  label="Publicación"
                  rows={9}
                  name="details"
                  value={values.details || ""}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.details}
                  touched={touched.details}
                />
              </InputContainer>
              <ButtonContainer>
                <GameButton
                  type="submit"
                  label="PUBLICAR"
                  fillDiv={isDesktop ? false : true}
                  disabled={submitting}
                />
              </ButtonContainer>
            </Form>
          </FormContainer>
        )}
      </Formik>
    </ResponsiveContentGrid>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.user.user,
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(QuestionForm));
