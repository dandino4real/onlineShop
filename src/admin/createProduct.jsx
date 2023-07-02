import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Formcontainer from "../components/FormContainer";
import { Form, Button, Row, Col, Image } from "react-bootstrap";

import { productsCreate } from "../features/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);

  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        name,
        brand,
        price,
        desc,
        image: productImg,
      })
    );
  };

  return (
    <Row>
      <Col style={{ height: 400 }} xs={8} md={5} >
        <Form onSubmit={handleSubmit} className="ms-3">
          <h5 className="mb-3">Create a Product</h5>
          <Form.Group controlId="image" className="mb-3">
            <Form.Control
              id="imgUpload"
              accept="image/*"
              type="file"
              onChange={handleProductImageUpload}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Select aria-label="Default select example" className="mb-3">
            <option value="">Select Brand</option>
            <option value="iphone">iPhone</option>
            <option value="samsung">Samsung</option>
            <option value="xiomi">Xiomi</option>
            <option value="other">Other</option>
          </Form.Select>

          <Form.Group controlId="name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="price" className="mb-3">
            <Form.Control
              type="number"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Short Description"
              onChange={(e) => setDesc(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Button className="w-100" variant="dark">
            {createStatus === "pending" ? "submitting" : "submit"}
          </Button>
        </Form>
      </Col>

      <Col
        className=" d-flex justify-content-center pb-5"
        style={{ minHeight: "100vh" }}
        xs={8}
        md={7}
      >
        {productImg ? (
          <div className=" px-2">
            <Image
              src={productImg}
              alt="product-image"
              style={{ height: 450, width: "100%", objectFit: "cover" }}
            />
          </div>
        ) : (
          <p
            className="border border-1 d-flex align-items-center justify-content-center p-4"
            style={{ height: 450 }}
          >
            Product image upload preview will appear here!
          </p>
        )}
      </Col>
    </Row>
  );
};

export default CreateProduct;
