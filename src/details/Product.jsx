import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { setHeaders, url } from "../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Button, Col, Container, Row } from "react-bootstrap";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(product);

  useEffect(() => {
    setLoading(true);
    async function fetchdata() {
      try {
        const res = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );

        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }

      setLoading(false);
    }

    fetchdata();
  }, [params]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <section style={{ backgroundColor: "#f1f1f2", minHeight: "100vh"}} className="py-5" >
      <div>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <Container className="p-3 " style={{ backgroundColor: "#fff"}}>
            <Row>
              <Col md={4} >
                <div  className="text-center">
                  <img src={product.image?.url} alt="product" style={{height: "22rem", width:"20rem"}}/>
                </div>
              </Col>
              <Col md={8} className="px-5 ">
                <div  style={{width: "30rem"}} className="py-5 text-center">
                  <h2>{product.name}</h2>
                  <h5 >
                    <span>Brand:</span> {product.brand}
                  </h5>
                  <p  className="my-2">
                    <span>Description:</span> {product.desc}
                  </p>
                  <h4 >${product.price?.toLocaleString()}</h4>
                  <Button variant="success" onClick={() => handleAddToCart(product)} className="w-50">
                    {" "}
                    Add To Cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </section>
  );
};

export default Product;
