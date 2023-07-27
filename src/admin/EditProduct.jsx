import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { productsEdit } from "../features/productSlice";
import InputGroup from "react-bootstrap/InputGroup";

export default function EditProduct({ prodId }) {
  const { items } = useSelector((state) => state.products);

  const [open, setOpen] = useState(false);
  const [productImg, setProductImg] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const [currentProd, setCurrentProd] = useState({});
  const [previewImg, setPreviewImg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    let selectedProd = items.filter((item) => item._id === prodId);
    selectedProd = selectedProd[0];

    setCurrentProd(selectedProd);
    setPreviewImg(selectedProd.image.url);

    setProductImg("");
    setCategory(selectedProd.category);
    setBrand(selectedProd.brand);
    setName(selectedProd.name);
    setPrice(selectedProd.price);
    setDesc(selectedProd.desc);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);

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
        setPreviewImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsEdit({
        productImg,
        product: {
          ...currentProd,
          name: name,
          price: price,
          desc: desc,
          brand: brand,
          category: category,
        },
      })
    );
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle className="m-3">
          {" "}
          <h3>Edit Product </h3>{" "}
        </DialogTitle>
        <DialogContent>
          <Row>
            <Col style={{ height: 400 }} xs={8} md={5}>
              <Form onSubmit={handleSubmit} className="ms-3">
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
                    <option value="Computer and Accessories">
                      Computer and Accessories
                    </option>
                    <option value="Phones and Tablets">
                      Phones and Tablets
                    </option>
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
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-2">
                  <InputGroup.Text>Name</InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroup"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-2">
                  <InputGroup.Text>Price</InputGroup.Text>
                  <Form.Control
                    id="inlineFormInputGroup"
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </InputGroup>

                <Form.Group controlId="description" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Short Description"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    required
                  ></Form.Control>
                </Form.Group>

                <Button className="w-100" variant="dark" type="submit">
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
              {previewImg ? (
                <div className=" border p-2" style={{ height: "20rem" }}>
                  <Image
                    src={previewImg}
                    alt="product-image"
                    style={{ height: 300, width: "100%", objectFit: "cover" }}
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
        </DialogContent>
        <DialogActions className="m-3">
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
