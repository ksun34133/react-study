import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { productData } from "../constants/products";
import Product from "./Product";

const Products = () => {
  const { url } = useRouteMatch();

  const linksList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div className="products_container">
        <div className="products_list">
          <h3>Products</h3>
          <ul className="products">{linksList}</ul>
        </div>
      </div>

      <Route path={`${url}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <h4 className="no-product-selected">No product selected!</h4>
      </Route>
    </div>
  );
};

export default Products;
