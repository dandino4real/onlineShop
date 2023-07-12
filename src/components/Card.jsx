import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";

function ProductsCard({product}) {
 const  navigate = useNavigate()
 
  const dispatch = useDispatch();
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };
  return (
    <Card
      className="product-card"
      style={{
        width: "16rem",
        height: "400px",
        boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Title className="py-2 px-3">{product.name}</Card.Title>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Card.Img
          variant="top"
          src={product.image.url}
          style={{ height: 250, width: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Card.Text>{product.desc}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted font-weight-bold">
            ${product.price}
          </Card.Subtitle>
        </div>
        <Button
          variant="primary"
          className="w-100"
          onClick={() => handleAddCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
