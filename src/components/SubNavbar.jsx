import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const handleMouseEnter = (e) => {
  e.target.style.backgroundColor = "#fff";
  e.target.style.color = "#000000"
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color = "#fff"

};
const baseColor = {
  color: "#fff",
  // color: "#909090",
  fontSize: "12px",
};

function SubNavbar() {
  return (
    <Container
      fluid
      // style={{ backgroundColor: "#f4f4f4" }}
      style={{ backgroundColor: "#37475a" }}
      className="px-3"
    >
      <Nav variant="tabs" className="px-0" sticky="top">
        <Nav.Item>
          <Nav.Link
            href="/home"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            All Categories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/home"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Computer and Accessories
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Phones and Tablets
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Electronics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home and Kitchen
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            style={{...baseColor, transition: "background-color 0.2s ease"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Fashion
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default SubNavbar;
