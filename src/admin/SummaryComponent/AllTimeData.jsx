import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const AllTimeData = () => {
  const { items } = useSelector((state) => state.products);
  console.log(items);
  return (
    <Row className="border rounded ms-1 mt-4 pb-3" style={{backgroundColor: "rgb(48, 51, 78)", color: "rgb(234, 234, 255, 0.87)"}}>
      <Row className="py-3 ">
        <Col>
          <h3>All Time</h3>
        </Col>
      </Row>
      <Row>
        <Col >
          <p>Users</p>
        </Col>
        <Col>
          <p>200</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <p>Products</p>
        </Col>
        <Col >
          <p>{items.length}</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <p>Orders</p>
        </Col>
        <Col>
          <p>200</p>
        </Col>
      </Row>
      <Row >
        <Col>
          <p>Earnings</p>
        </Col>
        <Col>
          <p>$20,000</p>
        </Col>
      </Row>
    </Row>
  );
};

export default AllTimeData;
