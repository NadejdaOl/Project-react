import React from "react";
import { useTheme } from "../../context";
import commonClasses from "../../styles/Common.module.css";
import classes from "./categoriesTitle.module.css";

export const CategoriesTitle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${classes.categoriesTitle} 
                   ${theme === "dark" ? classes.darkFontColor : ""}`}
    >
      <div className={commonClasses.container}>
        <div className={classes.nextCategories}>
          <div className={classes.nameCategories}>
            <h2>Categories</h2>
          </div>
          <div className={classes.changeCategory}>
            <div className={classes.title}>
              <div className={classes.linie}></div>
              <button className={classes.allCategoriesBtn}>
                All Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoriesTitle;
