import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import { useParams } from "react-router-dom";

import classes from "./oneCategoryPage.module.css";
import commonClasses from "../../styles/Common.module.css";

import ProductsInCategory from "../../components/ProductsInCategory/ProductsInCategory";

const CategoryPage = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  return (
    <div
      className={`${classes.ChoosesCategory} 
        ${theme === "dark" ? classes.darkTheme : ""}`}
    >
      <div className={commonClasses.container}>
        <h2>Category Page</h2>
        <ProductsInCategory categoryId={id} />
      </div>
    </div>
  );
};

export default CategoryPage;
