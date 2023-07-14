import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setHeaders, url } from "../features/api";

const Order = () => {
  const params = useParams();

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
console.log('order :', order)
console.log(params)
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${url}/orders/findOne/${params.id}`,
          setHeaders()
        );
        setOrder(res.data);
        setLoading(false);
      } catch (error) {}
    };

    fetchOrder();
  }, [params.id]);

  return (
    // <div>
    //   {loading ? (
    //     <p>loading...</p>
    //   ) : (
    //     <>
    //       <div>
    //         <h2>Order Details</h2>
    //         <p>
    //           Delivery status:{" "}
    //           {order.delivery_status === "pending" ? (
    //             <p>Pending</p>
    //           ) : order.delivery_status === "dispatched" ? (
    //             <p>Dispatched</p>
    //           ) : order.delivery_status === "delivered" ? (
    //             <p>Delivered</p>
    //           ) : (
    //             "error"
    //           )}
    //         </p>

    //         <h3>Ordered Products</h3>
    //         <div>
    //           {order.products?.map((product, index)=>(
    //             <div key={index}>
    //               <span>{product.description}</span>
    //               <span>{product.quantity}</span>
    //               <span>{"$" + (product.amount_total / 100).toLocaleString()}</span>
    //             </div>
    //           ))}
    //         </div>

    //         <div>
    //           <h3>Total Price</h3>
    //           <p>{"$" + (order.total / 100).toLocaleString()}</p>
    //         </div>
    //         <div>
    //           <h3>Shipping Details</h3>
    //           <p>Customer: {order.shipping?.name}</p>
    //           <p>City: {order.shipping?.address.city}</p>
    //           <p>Email: {order.shipping?.email}</p>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>


    <h3>single order</h3>
  );
};

export default Order;
