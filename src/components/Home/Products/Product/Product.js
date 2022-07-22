import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { id, title, price, description, category, image, rating } = product;
  return (
    <div class="col">
      <div class="card h-100">
        <div className="position-relative mx-auto">
          <img
            src={image}
            class="card-img-top"
            style={{ width: "300px", height: "300px" }}
            alt="..."
          />
          <div
            className="position-absolute bg-danger text-white p-2 me-0"
            style={{ right: "-27px", bottom: "5px" }}
          >
            Price: ${price}
          </div>
          <div
            className="position-absolute bg-primary text-white p-2 me-0"
            style={{ left: "-27px", bottom: "5px" }}
          >
            {category}
          </div>
        </div>

        <div class="card-body border-1 border-top">
          <h5 class="card-title">{title.slice(0, 25) + "..."}</h5>
          <p className="d-flex justify-content-between">
            <span>Rating: {rating.rate}</span>
            <span>Reviews: {rating.count}</span>
          </p>
          <p class="card-text">{description.slice(0, 100) + "..."}</p>
        </div>
        <button
          onClick={() => navigate(`/product/${id}`)}
          className="border-0 w-100 bg-primary text-white py-2 view"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
