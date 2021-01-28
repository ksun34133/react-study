import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((prod) => prod.id === Number(productId));
  let prodResponse;

  if (product) {
    prodResponse = (
      <>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <hr />
        <h5>{product.status}</h5>
      </>
    );
  } else {
    prodResponse = <h3>No product found!!</h3>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">{prodResponse}</div>
    </div>
  );
};

export default Product;
