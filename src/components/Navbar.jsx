import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logoutUser } from "../features/authSlice";

function NavbarComponent() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex my-2">
        <Navbar.Brand as={Link} to="/" className="text-white ms-4">
          OnlineShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/cart"
              className="text-white position-relative"
            >
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotalQuantity}
              </span>
            </Nav.Link>

            {auth._id ? (
              <>
                <Nav.Link as={Link} to="/admin" className="ms-5 text-white">
                  Admin
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/#"
                  className="ms-5 text-white"
                  onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="ms-5 text-white">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="ms-1 text-white">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
