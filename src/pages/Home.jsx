import React from "react";
// import { useGetAllProductsQuery } from "../features/productApi";
import ProductsCard from "../components/Card";
import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import Main from "../components/Main";
import TopSelling from "../components/TopSelling";

const Home = () => {
  const { items: data, status } = useSelector((state) => state.products);
  // const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <section
      id="home"
      style={{ backgroundColor: "#f1f1f2", overflowX: "hidden", minHeight: "100vh"}}
      className=" py-4 px-4"
    >
      <div>
        <Hero />
      </div>
      <Main />

      <div className="container-fluid px-0 "  >
        {status === "success" ? (
          <>
            <h2 className="  mb-0 text-center  " style={{backgroundColor: "#fee2cc"}}>New Arrivals</h2>
            <div className="p-2 mt-0 d-flex justify-content-center align-items-center flex-wrap " style={{ backgroundColor: "#fff"}}>
              {data?.map((product) => (
                <ProductsCard key={product._id} product={product} />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div id="top-selling">
        <TopSelling />

      </div>
    </section>
  );
};

export default Home;
