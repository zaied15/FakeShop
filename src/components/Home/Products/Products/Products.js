import React, { useState } from "react";
import useProducts from "../../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();
  const [loadMore, setLoadMore] = useState(6);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h3>All Products</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {products.slice(0, loadMore).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="text-center my-3">
        {loadMore >= products.length ? (
          ""
        ) : (
          <button
            onClick={() => setLoadMore(loadMore + 6)}
            className="btn btn-danger"
          >
            Load More Products
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
