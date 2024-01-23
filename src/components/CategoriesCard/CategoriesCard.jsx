import React from "react";
import { useTheme } from "../../context";
import classes from "./categoriesCard.module.css";

const CategoriesCard = ({ title, image }) => {
  const imageUrl = `http://127.0.0.1:3333${
    image.startsWith("/") ? "" : "/"
  }${image}`;
  const { theme } = useTheme();

  return (
    <div
      className={`${classes.card} ${theme === "dark" ? classes.darkTheme : ""}`}>
         <img src={imageUrl} alt={title} />
        <p>{title}</p>
    </div>
  );
};

export default CategoriesCard;
