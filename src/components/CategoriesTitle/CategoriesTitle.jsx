import React from "react";
import { useTheme } from "../../context";
import commonClasses from "../../styles/Common.module.css";
import classes from "./categoriesTitle.module.css";
import { Link } from "react-router-dom";

export const CategoriesTitle = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${classes.categoriesTitle} 
      ${theme === "dark" ? classes.darkTheme : ""}`}
    >
      <div className={commonClasses.container}>
        <div className={classes.nextCategories}>
          <div className={classes.nameCategories}>
            <h2>Categories</h2>
          </div>

          <div className={classes.changeCategory}>
            <div className={classes.title}>
              <div className={classes.linie}></div>
              <Link to="/categories" className={classes.allCategoriesBtn}>
                All categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesTitle;
