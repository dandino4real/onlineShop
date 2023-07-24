import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopSelling = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productCardStyles = {
    padding: "2px",
    borderRadius: "10px",
    width: "12rem",
    backgroundColor: "#ffffff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <section style={{ backgroundColor: "#fff" }} className="my-3">
      <h2 style={{ backgroundColor: "#fee2cc" }}>Top Selling</h2>
      <Carousel responsive={responsive}>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
        <div
          style={productCardStyles}
          className="p-2 rounded m-2"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1NzA3MTU5MXx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ height: "15rem", width: "100%" }}
            className="rounded"
          />
          <p className="mb-0 px-2">Iphone</p>
          <h6 className="px-2 py-0 mt-0">$400.00</h6>
        </div>
      </Carousel>
    </section>
  );
};

export default TopSelling;
