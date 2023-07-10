import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";


const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="d-flex pt-4 mb-5">
        <h2>Products</h2>
        <Button
        variant="dark"
        className="ms-auto me-5"
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </Button>
      </Container>
      <Outlet />
    </>
  );
};

export default Products;
