import React from "react";
import { useTheme } from "../../context";
// import { Link } from 'react-router-dom';
import classes from "./ProductCard.module.css";

const calculateDiscontPercentage = (price, discont_price) => {
  if (discont_price === null || discont_price === "null") {
    return null;
  }
  const percentage = ((price - discont_price) / price) * 100;
  return parseFloat(percentage.toFixed(1));
};

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
};

const ProductCard = ({ title, image, discont_price, price, productId }) => {
  const imageUrl = `http://127.0.0.1:3333${image.trimStart('/')}`;
  const discontPercentage = calculateDiscontPercentage(
    price,
    discont_price
  );
  const truncatedTitle = truncateTitle(title, 12);
  const { theme } = useTheme();

  return (
  
    <div className={`${classes.productCard} ${theme === "dark" ? classes.darkTheme : ""}`}>
      <div className={classes.salesFoto}>
        <img src={imageUrl} alt={title} />
        {discont_price !== null && discont_price !== "null" && (
          <p>{discontPercentage}% </p>
        )}
      </div>

      <div className={classes.productDesc}>
        <div className={classes.nameProduct}>
          <p>{truncatedTitle}</p>
        </div>

        <div className={classes.prices}>
          <div className={classes.newPrice}>
            <p>${discont_price !== null && discont_price !== "null" ? discont_price : price}</p>
          </div>
          {discont_price !== null && discont_price !== "null" && (
            <div className={classes.discont}>
              <p>${price}</p>
            </div>
          )}
        </div>
      </div>
      </div>
   
  );
};

export default ProductCard;
    
  
      
    