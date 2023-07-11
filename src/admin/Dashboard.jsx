import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaUsers,
  FaStore,
  FaClipboard,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

const getNavLinkStyle = ({ isActive, isPending }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "red" : "gray",
    borderLeft: isActive ? "1px solid gray" : "",
  };
};

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.isAdmin) return <Container>Access denied. Not an Admin!</Container>;

  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
        <Col sm={3} md={2} className="border-end border-3 pt-4">
          <Nav className="flex-column">
            <h3 className="mb-3">Quick Links</h3>
            <NavLink
              exact
              to="/admin/summary"
              className="nav-link ps-2 py-1"
              style={getNavLinkStyle}
            >
              <span className="me-1 ">
                <FaTachometerAlt />
              </span>{" "}
              Summary
            </NavLink>
            <NavLink
              exact
              to="/admin/products"
              className="nav-link ps-2 py-1"
              style={getNavLinkStyle}
            >
              <span className="me-1">
                <FaStore />
              </span>{" "}
              Products
            </NavLink>
            <NavLink
              exact
              to="/admin/orders"
              className="nav-link ps-2 py-1"
              style={getNavLinkStyle}
            >
              <span className="me-1">
                <FaClipboard />
              </span>{" "}
              Orders
            </NavLink>
            <NavLink
              exact
              to="/admin/users"
              className="nav-link ps-2 py-1"
              style={getNavLinkStyle}
            >
              <span className="me-1">
                <FaUser />
              </span>{" "}
              Users
            </NavLink>
          </Nav>
        </Col>
        <Col sm={9} md={10} className="main-content">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
