import { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="login-card shadow-lg border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {signupSuccess ? (
                <>
                  <Alert variant="success" className="text-center">
                    Verification email sent! Please check your inbox and verify your email to complete registration.
                  </Alert>
                  <div className="text-center mt-3">
                    <Link to="/login" className="small text-decoration-none">
                      Back to Login
                    </Link>
                  </div>
                </>
              ) : (
                <Formik
                  initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                  validationSchema={SignupSchema}
                  onSubmit={(_, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                      setSignupSuccess(true);
                      setSubmitting(false);
                      resetForm();
                    }, 800);
                  }}
                >
                  {({ isSubmitting }) => (
                    <FormikForm>
                      <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter name"
                        />
                        <ErrorMessage name="name">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

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

                      <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                        <ErrorMessage name="password">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

                      <Form.Group controlId="formConfirmPassword" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Field
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                        <ErrorMessage name="confirmPassword">
                          {(msg) => <div className="text-danger small mt-1">{msg}</div>}
                        </ErrorMessage>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                      </Button>
                      <div className="text-center mt-3">
                        <Link to="/login" className="small text-decoration-none">
                          Already have an account? Login
                        </Link>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
