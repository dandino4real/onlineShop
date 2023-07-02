import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { Container, Table, Button,BottonGroup, Row, Col, Image, ButtonGroup } from "react-bootstrap";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/cartSlice";
import PayButton from "./PayButton";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Row>
        <Col className="fs-1 fw-1 text-center mt-2 mb-5">Shopping Cart</Col>
      </Row>

      {cart.cartItems.length === 0 ? (
        <>
          <Row>
            <Col className="fs-5 text-center">Your cart is currently empty</Col>
          </Row>
          <Row>
            <Col className="fs-5 text-center">
              <Link to = "/" className="d-inline-block">
                <FontAwesomeIcon icon={faArrowLeftLong} /> Start Shopping
              </Link>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((cartItem) => (
                <tr key={cartItem._id}>
                  <td>
                    <Row className="no-gutters">
                      <Col xs={12} sm={3}>
                        <Image src={cartItem.image} alt={cartItem.name} width="50px" />
                      </Col>
                     
                    </Row>
                  </td>
                  <td>
                  <Row className="no-gutters">
                     
                      <Col xs={12} sm={9}>
                        <div className="fs-9">{cartItem.name}</div>
                        <div className="fs-9">{cartItem.desc}</div>
                      </Col>
                    </Row>
                  </td>
                  <td>${cartItem.price}</td>
                  <td>{cartItem.cartQuantity}</td>
                  <td>${cartItem.price * cartItem.cartQuantity}</td>
                  <td>
                    <ButtonGroup>
                    <Button variant="light" onClick={() => handleIncreaseCart(cartItem)}>
                      <FontAwesomeIcon icon={faSquarePlus} />
                    </Button>
                    <Button variant="light" onClick={() => handleDecreaseCart(cartItem)}>
                      <FontAwesomeIcon icon={faSquareMinus} />
                    </Button>{" "}
                    <Button variant="secondary" onClick={() => handleRemoveFromCart(cartItem)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
            <div>
              <Button variant="dark" onClick={() => handleClearCart()} className="my-2">
                Clear Cart
              </Button>
            </div>
            <div className="text-start d-inline-block my-3">
              <div className="fs-9 "><h5>Subtotal: ${cart.cartTotalAmount}</h5></div>
              <div className="fs-9">Taxes and shipping calculated at checkout</div>
              {auth._id ? (
                <PayButton cartItems={cart.cartItems} />
              ) : (
                <Button  variant="warning" onClick={() => navigate("/login")}>
                  Login to Checkout
                </Button>
              )}
              <div>

              <Link to="/">
                <FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shopping
              </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
