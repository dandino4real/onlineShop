import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./SummaryComponent/Widget";
const Summary = () => {
  const data = [
    {
      icon: <FaUsers />,
      digits: 50,
      isMoney: false,
      title: "Users",
      color: "rgb(102, 108, 255)",
      bgColor: "rgb(102, 108, 255, 0.12)",
      percentage: 30,
    },
    {
      icon: <FaClipboard />,
      digits: 70,
      isMoney: false,
      title: "Orders",
      color: "rgb(38, 198, 249)",
      bgColor: "rgb(38, 198, 249, 0.12)",
      percentage: -25,
    },
    {
      icon: <FaChartBar />,
      digits: 500,
      isMoney: true,
      title: "Earnings",
      color: "rgb(253, 181, 40)",
      bgColor: "rgb(253, 181, 40, 0.12)",
      percentage: 60,
    },
  ];
  return (
    <Container>
      <Row className="pt-3 " md-col-7>
        <Col id="main-stats" className="col-6 bg-dark text-white rounded">
          <Row className="flex-column">
            <Col id="title">
              <h2>Overview</h2>
              <p>How your shop is performing compared to the previous month</p>
            </Col>
            <Col id="widget-wrapper" className="d-flex justify-content-between">
              {data?.map((data, index) => (
                <Widget key={index} data={data} />
              ))}
            </Col>
          </Row>
        </Col>
        <Col id="side-stats" className="col-6" md-col-5>
          <Row className="flex-column">
            <Col>3</Col>
            <Col>4</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
