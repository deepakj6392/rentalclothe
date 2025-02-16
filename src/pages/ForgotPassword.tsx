import React, { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const OtpSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be 6 digits")
    .required("OTP is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
});

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Forgot Password</h2>
          {step === 1 && (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("OTP Sent", values);
                setSubmitting(false);
                setStep(2);
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                    <ErrorMessage name="email" component={Alert} />
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending OTP..." : "Send OTP"}
                  </Button>
                </FormikForm>
              )}
            </Formik>
          )}
          {step === 2 && (
            <Formik
              initialValues={{ otp: "", newPassword: "" }}
              validationSchema={OtpSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Password Reset Successful", values);
                setSubmitting(false);
                setStep(3);
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm>
                  <Form.Group controlId="formOtp" className="mb-3">
                    <Form.Label>OTP</Form.Label>
                    <Field
                      type="text"
                      name="otp"
                      className="form-control"
                      placeholder="Enter OTP"
                    />
                    <ErrorMessage name="otp" component={Alert}  />
                  </Form.Group>

                  <Form.Group controlId="formNewPassword" className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Field
                      type="password"
                      name="newPassword"
                      className="form-control"
                      placeholder="Enter new password"
                    />
                    <ErrorMessage name="newPassword" component={Alert} />
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Resetting..." : "Reset Password"}
                  </Button>
                </FormikForm>
              )}
            </Formik>
          )}
          {step === 3 && <Alert variant="success">Password reset successful!</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
