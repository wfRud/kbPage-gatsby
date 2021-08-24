import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "./Input";
import Button from "../../Button/Button";

import * as variable from "../../../assets/styles/Variables";
import * as Yup from "yup";

const FormContainer = styled.div`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 60vh;
  min-width: 550px;
  max-width: 620px;
  min-height: 530px;
  max-height: 580px;
  border: 1px solid ${variable.dark};
  background-color: ${variable.white};

  @media (max-width: 989px) {
    margin: 0 auto;
  }
  @media (max-width: 580px) {
    min-width: 300px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: 85%;
  width: 85%;
`;

const FormInner = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  @media (max-width: 1240px) {
    width: 80%;
  }

  @media (max-width: 940px) {
    width: 100%;
  }

  button {
    align-self: flex-start;
  }
`;

const FormTitle = styled.h2`
  font-size: ${variable.FONTSIZE_XL};
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const FormParagraph = styled.p`
  font-size: ${variable.FONTSIZE_M};
  color: ${variable.textColor};
  line-height: ${variable.FONTSIZE_XL};
  margin: ${variable.FORM_INPUT_VERTICAL_PADDING} 0;
`;

const ErrorMsg = styled.span`
  position: relative;
  top: -3%;
  font-size: ${variable.FONTSIZE_S};
  color: ${variable.red};
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const Legend = styled.legend`
  font-size: ${variable.FONTSIZE_S};
  position: relative;
  top: -4%;
  font-weight: ${variable.FONTWEIGHT_BOLD};
`;

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "The Name length has not to be shorter than 3 letter")
          .max(15, "The Name length has not to be longer than 15 letter")
          .required("The Name field is required"),
        email: Yup.string().email("Invalid email adress").required("Required"),
        message: Yup.string()
          .min(15, "The Message length has not to be shorter than 15 letter")
          .max(150, "The Message length has not to be longer than 150 letter")
          .required("The Message field is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <FormContainer>
          <FormWrapper>
            <FormTitle>Get in touch </FormTitle>
            <FormParagraph>
              Do you have any question, do not hesistate to text me !
            </FormParagraph>

            <FormInner onSubmit={formik.handleSubmit}>
              <Field
                name={"name"}
                dataTitle={"Put your name*"}
                title={"Name*"}
                component={Input}
              />
              <ErrorMessage name="name" component={ErrorMsg} />

              <Field
                name={"email"}
                dataTitle={"Put your email*"}
                title={"Email*"}
                component={Input}
              />
              <ErrorMessage name="email" component={ErrorMsg} />

              <Field
                name={"message"}
                tag={"textarea"}
                dataTitle={"Put your message*"}
                title={"Message*"}
                component={Input}
              />
              <ErrorMessage name="message" component={ErrorMsg} />

              <Button type="submit" text={"Send"} tag="button" send />
              <Legend>*required fields</Legend>
            </FormInner>
          </FormWrapper>
        </FormContainer>
      )}
    </Formik>
  );
};

export default ContactForm;
