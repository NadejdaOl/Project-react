import React from "react";
import { useTheme } from "../../context";
import commonClasses from "../../styles/Common.module.css";
import classes from "./mainPage.module.css";

import CategoriesAll from "../../components/CategoriesAll/CategoriesAll";
import CategoriesTitle from "../../components/CategoriesTitle/CategoriesTitle";
import Discount from "../../components/Discount/Discount";
import Product from "../../components/Product/Product";

const MainPage = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? classes.darkTheme : ""}`}>
      <section className={classes.main}>
        <div className={commonClasses.container}>
          <div className={classes.promo_text}>
            <div className={classes.promo_title}>
              Amazing Discounts
              <br />
              on Garden Products!
            </div>

            <div className={classes.promo_btn}>
              <a href="#!" className={classes.promo_btn}>
                Check out
              </a>
            </div>
          </div>
        </div>
      </section>
      <CategoriesTitle />
      <CategoriesAll />
      <Discount />
      <Product />
    </div>
  );
};

export default MainPage;
