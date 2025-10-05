import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

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
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="login-card shadow-lg border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Forgot Password</h2>
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
                        <ErrorMessage name="email">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
                        {isSubmitting ? "Sending OTP..." : "Send OTP"}
                      </Button>
                      <div className="text-center mt-3">
                        <Link to="/login" className="small text-decoration-none">
                          Back to Login
                        </Link>
                      </div>
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
                        <ErrorMessage name="otp">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

                      <Form.Group controlId="formNewPassword" className="mb-3">
                        <Form.Label>New Password</Form.Label>
                        <Field
                          type="password"
                          name="newPassword"
                          className="form-control"
                          placeholder="Enter new password"
                        />
                        <ErrorMessage name="newPassword">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

                      <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
                        {isSubmitting ? "Resetting..." : "Reset Password"}
                      </Button>
                      <div className="text-center mt-3">
                        <Link to="/login" className="small text-decoration-none">
                          Back to Login
                        </Link>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              )}
              {step === 3 && (
                <>
                  <Alert variant="success" className="text-center">Password reset successful!</Alert>
                  <div className="text-center mt-3">
                    <Link to="/login" className="small text-decoration-none">
                      Back to Login
                    </Link>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
