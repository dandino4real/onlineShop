import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const cardStyle = {
  width: "12rem",
  transition: "transform 0.2s ease-in-out",
  border: "none",
  boxShadow: "none", // Set initial box shadow to "none"
};

const imageStyle = {
  height: "13rem",
  objectFit: "cover",
  width: "100%",
};

const Main = () => {
  const { items: data, status } = useSelector((state) => state.products);

  const [hoverStates, setHoverStates] = useState(new Array(data?.length).fill(false));

  const handleCardHover = (index, isHovered) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = isHovered;
    setHoverStates(updatedHoverStates);
  };

  return (
    <section id="home" className="py-3 my-3 "  >
      <div className="py-3 container-fluid  d-flex flex-wrap justify-content-center align-items-center" style={{ backgroundColor: "#fff" }}>
        {status === "success" ? (
          <>
            {data?.map((product, index) => (
              <Card
                key={product._id}
                className="product-card m-2 "
                style={{
                  ...cardStyle,
                  boxShadow: hoverStates[index] ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none", 
                  transform: hoverStates[index] ? "scale(1.02)" : "scale(1)",
                 
                  
                }}
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                <Link to={`/product/${product._id}`}>
                  <Card.Img
                    variant="top"
                    src={product.image.url}
                    style={imageStyle}
                    className=" "
                  />
                </Link>
                <Card.Body className="p-0 text-center py-1">
                  <Card.Text>{product.name}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Main;
