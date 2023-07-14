import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Row, Col, Image } from "react-bootstrap";

import {  productsEdit } from "../features/productSlice";

export default function EditProduct({ prodId }) {
  const { items } = useSelector((state) => state.products);
  const [open, setOpen] = React.useState(false);

  const [productImg, setProductImg] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const [currentProd, setCurrentProd] = useState({})
  const [previewImg, setPreviewImg] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
    let selectedProd = items.filter((item) => item._id === prodId);
    selectedProd = selectedProd[0];

    setCurrentProd(selectedProd)
    setPreviewImg(selectedProd.image.url)

    setProductImg('')
    setBrand(selectedProd.brand)
    setName(selectedProd.name)
    setPrice(selectedProd.price)
    setDesc(selectedProd.desc)
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
        setPreviewImg(reader.result)
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
          name:name,
          price:price,
          desc:desc
        }
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
        <DialogTitle>Edit Product</DialogTitle>
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

                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                >
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
                    value={name}

                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="price" className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  ></Form.Control>
                </Form.Group>

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
                <div className=" px-2">
                  <Image
                    src={previewImg}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
