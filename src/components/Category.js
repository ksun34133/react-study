import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { categoriesData } from "../constants/categories";

const Item = ({ data }) => {
  const { name } = useParams();
  const category = data.find((cat) => cat.url === name);

  return (
    <div className="subnav-item">
      <h4>{category.name}</h4>
      <p>{category.description}</p>
    </div>
  );
};

const Category = () => {
  const { url, path } = useRouteMatch();

  const catList = categoriesData.map((category) => {
    return (
      <li key={category.id}>
        <Link to={`${url}/${category.url}`}>{category.name}</Link>
      </li>
    );
  });

  return (
    <div className="subnav">
      <ul>{catList}</ul>
      <Route path={`${path}/:name`}>
        <Item data={categoriesData} />
      </Route>
    </div>
  );
};

export default Category;
