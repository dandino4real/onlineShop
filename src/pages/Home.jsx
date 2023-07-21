import React from "react";
// import { useGetAllProductsQuery } from "../features/productApi";
import ProductsCard from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);
  // const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <section id="home" style={{backgroundColor: "#f9f9f9"}} >
    <div className="container-fluid mx-5 " >
      {status === "success" ? (
        <>
          <h2 className="py-5 text-center ">New Arrivals</h2>
          <div className="row">
            {data?.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>
        </>
      ) : null}
    </div>
    </section>
  );
};

export default Home;
