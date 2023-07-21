import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function ProductsCard({product}) {
 const  navigate = useNavigate()
 
  const dispatch = useDispatch();
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };
  return (
    <Card
      className="product-card p-2 mx-2"
      style={{
        width: "14rem",

        // boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* <Card.Title className="py-2 px-3">{product.name}</Card.Title> */}
      <Link to ={`/product/${product._id}`} > 
        <Card.Img
          variant="top"
          src={product.image.url}
          style={{ height: "16rem", width: "100%", objectFit: "cover" }}
          // className="border"
        />

      </Link>
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          
        >
          {/* <Card.Text>{product.desc}</Card.Text> */}
          <Card.Text>{product.name}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted font-weight-bold">
            ${product.price}
          </Card.Subtitle>
        </div>
        <Button
          variant="outline-primary"
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
