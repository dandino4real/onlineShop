import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container className="d-flex">
        <Navbar.Brand as={Link} to="/" className="text-white">
          OnlineShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
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
                3
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
