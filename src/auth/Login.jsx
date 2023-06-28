import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Formcontainer from "../components/FormContainer";
import Message from "../components/Message";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const redirect = "/register";

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <Formcontainer>
      
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="border p-3">
        {auth.loginStatus === "rejected" ? (
          <Message>{auth.loginError}</Message>
        ) : null}
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.email}
            placeholder="Enter password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          {auth.loginStatus === "pending" ? "Submitting..." : "login"}
        </Button>
      </Form>

      <Row>
        <Col className="py-3">
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            {" "}
            register
          </Link>
        </Col>
      </Row>
    </Formcontainer>
  );
};

export default Login;
