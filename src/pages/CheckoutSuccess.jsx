import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../features/cartSlice";
import { Container, Row, Col } from 'react-bootstrap'


const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Container className="text-center my-5">
      <Row><Col className="fs-2">Checkout Successful</Col></Row>
      <Row><Col>Your order might take some time to process.</Col></Row>
      <Row><Col>Check your order status at your profile after about 10mins.</Col></Row>
      <Row><Col> Incase of any inqueries contact the support at{" "}<strong>support@onlineshop.com</strong></Col></Row>
    </Container>
  );
};

export default CheckoutSuccess;


