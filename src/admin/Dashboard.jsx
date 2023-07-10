import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, Nav } from "react-bootstrap";
const Dashboard = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.isAdmin) return <Container>Access denied. Not an Admin!</Container>;

  return (
    <Container fluid>
      <Row style={{ minHeight: "100vh" }}>
        <Col sm={3} md={2} className="border-end border-3 pt-4">
          <Nav className="flex-column">
            <h3 className="mb-3" >Quick Links</h3>
            <Nav.Link
            as={Link}
              to="/admin/summary"
              className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
              }
            >
              Summary
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/products" className={({ isActive }) => (isActive ? "link-active" : "link-inactive")}>Products</Nav.Link>
            <Nav.Link as={Link} to="/admin/orders" className={({ isActive }) => (isActive ? "link-active" : "link-inactive")} >
              Orders
            </Nav.Link>
            <Nav.Link  as={Link} to="/admin/users" className={({ isActive }) => (isActive ? "link-active" : "link-inactive")}>Users</Nav.Link>
          </Nav>
        </Col>
        <Col sm={9} md={10} className="main-content">
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

