import React from "react";
import classes from './CategoryChoose.module.css';
import { useTheme } from "../../context";

const CategoryChoose = ({ title, image }) => {
  const imageUrl = image && `http://127.0.0.1:3333${image.startsWith('/') ? '' : '/'}${image}`;
  const { theme } = useTheme();

  return (
    <div className= {`${classes.choose} ${theme === "dark" ? classes.darkTheme : ""}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <span>No Image</span>
      )}
      <p>{title}</p>
    </div>
  );
};

export default CategoryChoose;