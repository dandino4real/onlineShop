import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


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
    <>
      <div onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        <select onChange={(e) => setBrand(e.target.value)} required>
          <option value="">Select Brand</option>
          <option value="iphone">iPhone</option>
          <option value="samsung">Samsung</option>
          <option value="xiomi">Xiomi</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Short Description"
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </button>
      </div>
      <div>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </div>
    </>
  );
};

export default CreateProduct;

