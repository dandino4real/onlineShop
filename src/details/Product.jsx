import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { setHeaders, url } from "../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

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
    <div>
      <div>
        {loading ? (
          <p>loading ...</p>
        ) : (
          <div>
            <div>
              <img src={product.image?.url} alt="product" />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>
                <span>Brand:</span> {product.brand}
              </p>
              <p>
                <span>Description:</span> {product.desc}
              </p>
              <p>${product.price?.toLocaleString()}</p>
              <button onClick={() => handleAddToCart(product)}>
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
