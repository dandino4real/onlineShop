import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";
import ProductsCard from "../components/Card";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="container">
      {error ? (
        <p>An error occurred...</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <h2 className="py-5">New Arrivals</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {data?.map(({ name, image, desc, price }) => (
              <div className="col mb-4">
                <ProductsCard
                  key={name}
                  name={name}
                  image={image}
                  desc={desc}
                  price={price}
                />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Home;
