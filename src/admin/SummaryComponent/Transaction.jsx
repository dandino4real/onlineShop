import axios from "axios";
import React, { useEffect, useState } from "react";
import { setHeaders, url } from "../../features/api";
import moment from "moment";
import { Table, Row, Col } from "react-bootstrap";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setisLoading] = useState(false);
 
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
       
        <div className="rounded ms-1 py-2 px-2" style={{backgroundColor: "rgb(48, 51, 78)", color: "rgb(234, 234, 255, 0.87)"}}>
        
            <Row className="my-2 mx-1">
                <Col><h3>Latest Transactions</h3></Col>
            </Row>
            <Row className="my-2 mx-1 ">
                {orders?.map((order, index)=>(
                    <div key={index} className="d-flex mb-3 py-2" style={{ backgroundColor: index % 2 === 0 ? "rgb(102, 108, 255, 0.12)" : "rgb(38, 198, 249, 0.12)"  }}>
                     <Col >
                     <p className="mb-0 " >{order.shipping.name}</p>
                     </Col>
                     <Col>
                     <p className="mb-0 mx-1">

                     ${(order.total / 100).toLocaleString()}
                     </p>
                     </Col>
                     <Col >
                     <p className="mb-0">

                     {moment(order.createdAt).fromNow()}
                     </p>
                     </Col>
                    </div>
                    
                ))}
               
            </Row>
          
        </div>
      )}
    </>
  );
};

export default Transactions;

