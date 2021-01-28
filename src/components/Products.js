import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
// import { productData } from "../constants/products";
import { productList } from "../constants/products-list";
import Product from "./Product";

const Products = () => {
  const { url } = useRouteMatch();

  const linksList = productList.map((product) => {
    return (
      <li key={product.ProductID}>
        <Link to={`${url}/${product.SKU}`}>{product.Name}</Link>
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
        <Product data={productList} />
      </Route>
      <Route exact path={url}>
        <h4 className="no-product-selected">No product selected!</h4>
      </Route>
    </div>
  );
};

export default Products;
