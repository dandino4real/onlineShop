import React from "react";
// import { useGetAllProductsQuery } from "../features/productApi";
import ProductsCard from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const {items:data, status} = useSelector(state=>state.products)
  // const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="container">
      {status === "success" ? (
        <>
          <h2 className="py-5 text-center">New Arrivals</h2>
          <div className="row">
            {data?.map((product) => (
              <div className="col mb-4" >
                <ProductsCard key={product._id} product={product} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Home;
