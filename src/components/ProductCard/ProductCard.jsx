import React from "react";
import { useTheme } from "../../context";
import classes from "./ProductCard.module.css";

const calculateDiscontPercentage = (price, discont_price) => {
  const percentage = ((price - discont_price) / price) * 100;
  return Math.round(percentage);
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
};

const ProductCard = ({ title, image, price, discont_price }) => {
  const imageUrl = `http://127.0.0.1:3333${
    image.startsWith("/") ? "" : "/"
  }${image}`;
  const discontPercentage = calculateDiscontPercentage(price, discont_price);
  const truncatedTitle = truncateTitle(title, 15);
  const { theme } = useTheme();

  return (
    <div className={classes.productCard}>
      <div className={classes.salesFoto}>
        <img src={imageUrl} alt={title} />
        <p>{discontPercentage}% OFF</p>
      </div>

      <div
        className={`${classes.productDesc} 
        ${theme === "dark" ? classes.darkTheme : ""}`}
      >
        <div className={classes.nameProduct}>
          <p>{truncatedTitle}</p>
        </div>

        <div
          className={`${classes.prices} 
                    ${theme === "dark" ? classes.darkTheme : ""}`}
        >
          <div className={classes.newPrice}>
            <p>${price}</p>
          </div>
          <div className={classes.discont}>
            <p>${discont_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
