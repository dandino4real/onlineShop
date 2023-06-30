import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import Formcontainer from "../components/FormContainer";

import Message from "../components/Message";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const redirect = "/login";

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(registerUser(formData));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Formcontainer>
      <h1>Create your account</h1>
      <Form onSubmit={submitHandler} className=" p-3">
        {message && <Message variant="danger">{message}</Message>}
        {auth.registerStatus === "rejected" ? (
          <Message variant="danger">{auth.registerError}</Message>
        ) : null}
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmpassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="dark">
          {auth.registerStatus === "pending" ? "submitting..." : "sign-up"}
        </Button>
      </Form>
      <Row>
        <Col className="py-3">
          Have An Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            {" "}
            login
          </Link>
        </Col>
      </Row>
    </Formcontainer>
  );
};

export default Register;
