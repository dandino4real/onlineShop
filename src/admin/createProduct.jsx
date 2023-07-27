import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import { productsCreate } from "../features/productSlice";
import InputGroup from "react-bootstrap/InputGroup";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);

  const [productImg, setProductImg] = useState("");
  const [category, setCategory] = useState("");
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
        category,
        brand,
        price,
        desc,
        image: productImg,
      })
    );
  };

  return (
    <Row>
      <Col style={{ height: 400 }}  md={5}>
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

          <InputGroup className="mb-2">
            <InputGroup.Text>Category</InputGroup.Text>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">Select Category</option>
              <option value="Computer and Accessories">Computer and Accessories</option>
              <option value="Phones and Tablets">Phones and Tablets</option>
              <option value="Electronics">Electronics</option>
              <option value="Home and Kitchen">Home and Kitchen</option>
              <option value="Fashion">Fashion</option>
              <option value="other">Other</option>
            </Form.Select>
          </InputGroup>

          <InputGroup className="mb-2">
            <InputGroup.Text>Brand</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="text"
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup className="mb-2">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup className="mb-2">
            <InputGroup.Text>Price</InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup className="mb-2">
            <InputGroup.Text>Desc </InputGroup.Text>
            <Form.Control
              id="inlineFormInputGroup"
              type="text"
              as="textarea"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </InputGroup>

          <Button className="w-100" variant="dark" type="submit">
            {createStatus === "pending" ? "submitting" : "submit"}
          </Button>
        </Form>
      </Col>

      <Col
        className=" d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
        
        md={7}
      >
        {productImg ? (
          <div className="p-5 my-4 border" style={{width: "34rem"}} >
            <Image
              src={productImg}
              alt="product-image"
              style={{ height: "30rem", width: "100%", objectFit: "cover" }}
            />
          </div>
        ) : (
          <p
            className="border border-1 d-flex align-items-center justify-content-center p-5 my-4"
            style={{ height: 400, width: "34rem" }}
          >
            Product image upload preview will appear here!
          </p>
        )}
      </Col>
    </Row>
  );
};

export default CreateProduct;

