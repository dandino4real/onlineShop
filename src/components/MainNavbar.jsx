import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";



const handleMouseEnter = (e) => {
  e.target.style.color = "#ff6a00";
  e.target.style.textDecoration = "underline";
};

const handleMouseLeave = (e) => {
  // e.target.style.color = "#fff";
  e.target.style.color = "#000000a6";
  e.target.style.textDecoration = "none";
};


function MainNavbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <Navbar
      expand="lg"
     
      style={{ 
        backgroundColor: "#f9f9f9", 
        // backgroundColor: "#131921", 
      
      }}
      className="py-1 "
    >
      <Container fluid className="mx-3 ps-0">
        <Navbar.Brand as={Link} to="/">
          <h2 style={{ color: "#ff6a00" }}>OnlineShop</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart" className="position-relative me-3">
              {" "}
              <FontAwesomeIcon
                icon={faShoppingCart}
                // style={{color: "#fff"}}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff6a00";
                }}
                onMouseLeave={(e) => {
                  // e.target.style.color = "#fff";
                  e.target.style.color = "#000000a6";
                }}
              />
              <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotalQuantity}
              </span>
            </Nav.Link>

            {auth._id ? (
              <>
                {auth.isAdmin ? (
                  <Nav.Link
                    as={Link}
                    to="/admin/summary"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    // style={{color: "#fff"}}
                  >
                    Admin
                  </Nav.Link>
                ) : null}

                <Nav.Link
                  as={Link}
                  to="/#"
                  onClick={() => {
                    dispatch(logoutUser(null));
                    toast.warning("Logged out", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  // style={{color: "#fff"}}

                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                  // style={{ color: "#000000a6", textDecoration: "none" }}
                  onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                //  style={{color: "#fff"}}

                >
                  Sign-In
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/register"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  // style={{color: "#fff"}}

                >
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

export default MainNavbar;
