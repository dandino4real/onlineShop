import axios from "axios";
import React, { useEffect, useState } from "react";
import { setHeaders, url } from "../../features/api";
import moment from "moment";
import { Table, Row, Col } from "react-bootstrap";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  console.log("orders: ", orders);
  useEffect(() => {
    async function fetchData() {
      setisLoading(true);
      try {
        const res = await axios.get(`${url}/orders/?new=true`, setHeaders());
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
      setisLoading(false);
    }

    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Transactions loading</p>
      ) : (
       
        <Row className="rounded ms-1 pb-3" style={{backgroundColor: "rgb(48, 51, 78)", color: "rgb(234, 234, 255, 0.87)"}}>
            <Col>
            <Row className="my-3">
                <Col><h3>Latest Transactions</h3></Col>
            </Row>
            <Row>
                {orders?.map((order, index)=>(
                    <div key={index} className="d-flex">
                     <Col>
                     <p>{order.shipping.name}</p>
                     </Col>
                     <Col>
                     ${(order.total / 100).toLocaleString()}
                     </Col>
                     <Col>
                     {moment(order.createdAt).fromNow()}</Col>
                    </div>
                    
                ))}
               
            </Row>
            </Col>
        </Row>
      )}
    </>
  );
};

export default Transactions;

