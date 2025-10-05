import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; // Make sure react-router-dom is installed // Add this import at the top

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="login-card shadow-lg border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {loginSuccess && (
                <Alert variant="success" className="text-center">
                  Login successful!
                </Alert>
              )}
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    setLoginSuccess(true);
                    setSubmitting(false);
                    resetForm();
                  }, 800);
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

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Link to="/forgot-password" className="small text-decoration-none">
                        Forgot Password?
                      </Link>
                      <Link to="/signup" className="small text-decoration-none">
                        Sign Up
                      </Link>
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </Button>
                  </FormikForm>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
