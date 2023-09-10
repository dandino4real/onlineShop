import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "14rem",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  border: "none", 
  boxShadow: "none", 
};

const imageStyle = {
  height: "16rem",
  objectFit: "cover",
  width: "100%",
};

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className="product-card p-2 m-2"
      style={{
        ...cardStyle,
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        boxShadow: isHovered ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none", 
 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image.url} style={imageStyle} className="p-2" />
      </Link>
      <Card.Body className="px-3 pt-0 ">
        <div>
          <Card.Text className="py-1 m-0">{product.name}</Card.Text>
          <Card.Subtitle className="mb-1 ">
            ${product.price}
          </Card.Subtitle>
        </div>
        <Button
          variant="outline-success"
          className="w-100"
          onClick={() => handleAddCart(product)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
