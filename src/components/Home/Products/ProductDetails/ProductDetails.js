import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-5 text-center">
          <img
            className="border-1 border rounded"
            src={product?.image}
            width="80%"
            alt=""
          />
        </div>
        <div className="col-md-5">
          <h5>{product?.title}</h5>
          <p className="d-flex justify-content-between">
            <span>Rating: {product?.rating?.rate}</span>
            <span>Reviews: {product?.rating?.count}</span>
          </p>
          <p class="card-text">{product?.description}</p>

          <p>
            Price: <span className="fw-bold">${product?.price}</span>
          </p>
          <p>
            Category: <span className="fw-bold">{product?.category}</span>
          </p>
          <button className="btn btn-primary fw-bold">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
