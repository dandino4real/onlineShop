import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const AllTimeData = () => {
  const { items } = useSelector((state) => state.products);
  
  return (
    
    <div className="rounded ms-1 mt-4 p-2 px-2" style={{backgroundColor: "rgb(48, 51, 78)", color: "rgb(234, 234, 255, 0.87)"}}>
      <Row className="my-2 mx-1 ">
        <Col >
          <h3>All Time</h3>
        </Col>
      </Row>
      <Row className="mb-3 mx-1 py-2 rounded" style={{backgroundColor: "rgb(102, 108, 255, 0.12)"}}>
        <Col>
          <p className="mb-0">Users</p>
        </Col>
        <Col >
          <p className="mb-0">200</p>
        </Col>
      </Row>

      <Row className="my-3 mx-1 py-2" style={{backgroundColor: "rgb(38, 198, 249, 0.12)"}}> 
        <Col >
          <p className="mb-0">Products</p>
        </Col>
        <Col >
          <p className="mb-0">{items.length}</p>
        </Col>
      </Row>

      <Row className="my-3 mx-1 py-2" style={{backgroundColor: "rgb(102, 108, 255, 0.12)"}}>
        <Col >
          <p className="mb-0"> Orders</p>
        </Col>
        <Col >
          <p className="mb-0">200</p>
        </Col>
      </Row>
      <Row className="my-3 mx-1 py-2" style={{backgroundColor: "rgb(38, 198, 249, 0.12)"}}>
        <Col >
          <p className="mb-0">Earnings</p>
        </Col>
        <Col >
          <p className="mb-0">$20,000</p>
        </Col>
      </Row>
    </div>
  );
};

export default AllTimeData;
