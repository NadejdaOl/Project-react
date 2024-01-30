import React from "react";
import classes from './CategoryChoose.module.css';
import { Link } from "react-router-dom";
import { useTheme } from "../../context";

const CategoryChoose = ({ id, title, image }) => {
  const imageUrl = image && `http://127.0.0.1:3333${image.startsWith('/') ? '' : '/'}${image}`;
  const { theme } = useTheme();

  return (
    <Link to={`/category/${id}`} className={`${classes.choose} ${theme === "dark" ? classes.darkTheme : ""}`}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <span>No Image</span>
      )}
      <p>{title}</p>
    </Link>
  );
};

export default CategoryChoose;