import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./SummaryComponent/Widget";
import { setHeaders, url } from "../features/api";
const Summary = () => {
  const [users, setUsers] = useState([]);
  const [usersPercentage, setUsersPercentage] = useState(0);
  const [orders, setOrders] = useState([]);
  const [ordersPercentage, setOrdersPercentage] = useState(0);
  console.log(ordersPercentage);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get(`${url}/users/stats`, setHeaders());

        res.data.sort((a, b) => b._id - a._id);
        console.log("stats", res.data);
        setUsers(res.data);
        const percent =
          (((res.data[0]?.total || 0) - (res.data[1]?.total || 0)) /
            (res.data[1]?.total || 1)) *
          100;
        console.log("percent 1", percent);
        setUsersPercentage(percent.toFixed(0));
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchdata();
  }, []);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await axios.get(`${url}/orders/income`, setHeaders());
        res.data.sort((a, b) => b._id - a._id);
        console.log("order", res.data);
        setOrders(res.data);
        const percent =
          (((res.data[0]?.total || 0) - (res.data[1]?.total || 0)) /
            (res.data[1]?.total || 1)) *
          100;
        console.log("percent", percent);
        setOrdersPercentage(percent.toFixed(0));
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchOrder();
  }, []);

  const data = [
    {
      icon: <FaUsers />,
      digits: users[0]?.total,
      isMoney: false,
      title: users[0]?.total > 1 ? "Users" : "User",
      color: "rgb(102, 108, 255)",
      bgColor: "rgb(102, 108, 255, 0.12)",
      percentage: usersPercentage,
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
      <Row className="pt-3 ">
        <Col id="main-stats" className="col-7">
          <Row className="flex-column">
            <Col id="title" className="mb-2 bg-dark text-white rounded">
              <h2>Overview</h2>
              <p>How your shop is performing compared to the previous month</p>
              <div
                id="widget-wrapper"
                className="d-flex justify-content-between mt-5"
              >
                {data?.map((data, index) => (
                  <Widget key={index} data={data} />
                ))}
              </div>
            </Col>
            <Col>stat</Col>
          </Row>
        </Col>
        <Col id="side-stats" className="col-5">
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
