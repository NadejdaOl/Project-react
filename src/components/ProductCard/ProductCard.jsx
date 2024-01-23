import React from "react";
import { useTheme } from "../../context";
import classes from "./ProductCard.module.css";

const calculateDiscontPercentage = (price, discont_price) => {
  const percentage = ((price - discont_price) / price) * 100;
  return parseFloat(percentage.toFixed(1));
  // return Math.round(percentage);
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
};

const ProductCard = ({ title, image, discont_price, price}) => {
  const imageUrl = `http://127.0.0.1:3333${
    image.startsWith("/") ? "" : "/"
  }${image}`;
  const discontPercentage = calculateDiscontPercentage(price, discont_price);
  const truncatedTitle = truncateTitle(title, 12);
  const { theme } = useTheme();

  return (
    <div className={`${classes.productCard} ${theme === "dark" ? classes.darkTheme : ""}`}>
      <div className={classes.salesFoto}>
        <img src={imageUrl} alt={title} />
        <p>{discontPercentage}% </p>
      </div>

      <div className={classes.productDesc}>
        <div className={classes.nameProduct}>
          <p>{truncatedTitle}</p>
        </div>

        <div className={classes.prices}>
          <div className={classes.newPrice}>
            <p>${discont_price}</p>
          </div>
          <div className={classes.discont}>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
