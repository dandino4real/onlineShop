import { Button, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-between align-items-center pt-3 mb-3 px-1"
      >
        <h2 className="mb-0">Products</h2>
        <Button
          variant="dark"
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
