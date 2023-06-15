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

  console.log(auth)

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
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <Formcontainer>
      {message && <Message variant="danger">{message}</Message>}
      {auth. registerStatus === 'rejected' ? <Message variant='danger'>{auth.registerError}</Message> : null}    
      <h1>Sign-Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmpassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            placeholder="Confirm password"
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          {auth.rigisterStatus === "pending" ? "Submitting..." : "register"}
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

// const Register = () => {
// const dispatch = useDispatch();
// const navigate = useNavigate();
// const auth = useSelector((state) => state.auth);

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

// useEffect(() => {
//   if (auth._id) {
//     navigate("/cart");
//   }
// }, [auth._id, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser({
//       name: "",
//       email: "",
//       password: "",
//     });
//     console.log(user);
// dispatch(registerUser(user));
// setUser({
//   name: "",
//   email: "",
//   password: "",
// });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         <input
//           type="text"
//           placeholder="name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//         />
//         <button>
// {auth.rigisterStatus === "pending" ? "Submitting..." : "Register"}
//         </button>
//         {auth.registerStatus === "rejected" ? (
//           <p>{auth.registerError}</p>
//         ) : null}
//       </form>
//     </>
//   );
// };

// export default Register;
