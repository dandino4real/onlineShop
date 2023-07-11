import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./SummaryComponent/Widget";
import { setHeaders, url } from "../features/api";
import Charts from "./SummaryComponent/Charts";
import Transactions from "./SummaryComponent/Transaction";
import AllTimeData from "./SummaryComponent/AllTimeData";
const Summary = () => {
  const [users, setUsers] = useState([]);
  const [usersPercentage, setUsersPercentage] = useState(0);
  const [orders, setOrders] = useState([]);
  const [ordersPercentage, setOrdersPercentage] = useState(0);
  const [income, setIncome] = useState([]);
  const [incomePercentage, setIncomePercentage] = useState(0);

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get(`${url}/users/stats`, setHeaders());

        res.data.sort((a, b) => b._id - a._id);

        setUsers(res.data);
        const percent =
          (((res.data[0]?.total || 0) - (res.data[1]?.total || 0)) /
            (res.data[1]?.total || 1)) *
          100;

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
        const res = await axios.get(`${url}/orders/stats`, setHeaders());
        res.data.sort((a, b) => b._id - a._id);

        setOrders(res.data);
        const percent =
          (((res.data[0]?.total || 0) - (res.data[1]?.total || 0)) /
            (res.data[1]?.total || 1)) *
          100;

        setOrdersPercentage(percent.toFixed(0));
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchOrder();
  }, []);

  useEffect(() => {
    async function fetchIncome() {
      try {
        const res = await axios.get(`${url}/orders/income/stats`, setHeaders());
        res.data.sort((a, b) => b._id - a._id);

        setIncome(res.data);
        const percent =
          (((res.data[0]?.total || 0) - (res.data[1]?.total || 0)) /
            (res.data[1]?.total || 1)) *
          100;

        setIncomePercentage(percent.toFixed(0));
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchIncome();
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
      digits: orders[0]?.total,
      isMoney: false,
      title: orders[0]?.total > 1 ? "Orders" : "Order",
      color: "rgb(38, 198, 249)",
      bgColor: "rgb(38, 198, 249, 0.12)",
      percentage: ordersPercentage,
    },
    {
      icon: <FaChartBar />,
      digits: income[0]?.total ? income[0]?.total / 100 : "",
      isMoney: true,
      title: "Earnings",
      color: "rgb(253, 181, 40)",
      bgColor: "rgb(253, 181, 40, 0.12)",
      percentage: incomePercentage,
    },
  ];
  return (
    <Container className="pb-5">
      <Row className="pt-4 ms-2">
        <Col id="main-stats" className="col-8">
          <Row className="flex-column">
            <Col id="title" className="mb-2 rounded border mb-4" style={{backgroundColor: "rgb(48, 51, 78)", color: "rgb(234, 234, 255, 0.87)"}}>
              <h2 className="my-3">Overview</h2>
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
            <Col>
              <Charts />
            </Col>
          </Row>
        </Col>
        <Col id="side-stats" className="col-4">
          <Row className="flex-column me-2">
            <Col><Transactions/ ></Col>
            <Col><AllTimeData /> </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
