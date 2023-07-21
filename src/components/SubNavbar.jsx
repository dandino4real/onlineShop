import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";


const handleMouseEnter = (e) => {
    e.target.style.color = "#ff6a00";
    e.target.style.textDecoration = "underline";
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.color = "#000000a6";
    e.target.style.textDecoration = "none";
  };
  const baseColor = {
    color : "#909090", 
    fontSize: "12px"
  }

function SubNavbar() {
  return (
    <Container fluid style={{ backgroundColor: "#f4f4f4" }} className="px-0">
      <Nav variant="tabs" className="px-0" >
        <Nav.Item >
          <Nav.Link href="/home" className="px-5" style={baseColor}  >Computer and Accessories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"  className="px-5" style={baseColor} >Phones and Tablets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"  className="px-5" style={baseColor} >Electronics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"  className="px-5" style={baseColor} >Home and Kitchen</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"  className="px-5" style={baseColor} >Fashion</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Container>
  );
}

export default SubNavbar;
