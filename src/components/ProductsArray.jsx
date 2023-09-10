import React, { useState, useEffect } from "react";
import ProductCard from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../features/productSlice";


const ProductsArray = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  // const { items: data, status } = useSelector((state) => state.products);
  
  const { items: data, pageStatus, status } = useSelector((state) => state.products); //added
  let page = pageStatus.currentPage; //added
  let pages = pageStatus.totalPages; //added
  let totalProducts = pageStatus.totalProducts //added

  const [currentPage, setCurrentPage] = useState(page);  //added
  const [totalPages, setTotalPages] = useState(pages);  //added

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch(currentPage));
  }, [currentPage, dispatch]);


  // useEffect(() => {
  //   setTotalPages(Math.ceil(data.length / 10));
  // }, [data]);



  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container-fluid px-0 ">
      {status === "success" ? (
        <>
          <h2 
            className="  mb-0 text-center  "
            style={{ backgroundColor: "#fee2cc" }}
          >
            New Arrivals
          </h2>
          <div 
            className="p-2 mt-0 d-flex justify-content-center align-items-center flex-wrap "
            style={{ backgroundColor: "#fff" }}
          >
            {data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div  className="d-flex justify-content-center mt-3">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProductsArray;
