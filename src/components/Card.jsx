import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductsCard({ name, image, price, desc }) {
  return (
    <Card style={{ width: "18rem", height: "380px" }}>
      <Card.Title>{name}</Card.Title>
      <Card.Img variant="top" src={image} style={{ maxHeight: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Text>{desc}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductsCard;
