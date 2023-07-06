import React from "react";
import { Col, Row } from "react-bootstrap";

const Widget = ({ data }) => {
  const iconColor = {
    color: data.color,
    backgroundColor: data.bgColor,
  };

  return (
    <Row className="mb-3">
      <Col id="icon" style={iconColor}>
        <span className="fs-3">{data.icon}</span>
      </Col>
      <Col id="text" className="ps-0">
        <Row>
          <Col>
            {data.isMoney
              ? "$" + data.digits?.toLocaleString()
              : data.digits?.toLocaleString()}
          </Col>
        </Row>
        <Row >
          <Col className="pe-1">
            <p className="mb-0">{data.title}</p>
          </Col>
        </Row>
      </Col>
      {data.percentage < 0 ? (
        <Col className="d-flex align-items-center ps-0">
          <span className="text-success"> {Math.ceil(data.percentage)}% </span>
        </Col>
      ) : (
        <Col className="d-flex align-items-center ps-0">
          <span className="text-danger">{Math.floor(data.percentage)}% </span>
        </Col>
      )}
    </Row>
  );
};

export default Widget;
