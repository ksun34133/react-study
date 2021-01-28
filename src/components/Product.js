import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  console.log(productId);
  const product = data.find((prod) => prod.SKU === productId);
  let prodResponse;

  if (product) {
    prodResponse = (
      <>
        <h4>{product.Name}</h4>
        <p>{product.Description}</p>
        <h5>
          <b>Price:</b> ${product.Price}
        </h5>
        <h5>
          <b>No. of Ratings:</b> {product.RatingCount}
        </h5>
        <h5>
          <b>Average Rating:</b> {parseFloat(product.RatingAvg, 2)}
        </h5>
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
