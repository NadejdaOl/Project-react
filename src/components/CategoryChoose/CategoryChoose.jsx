import React from "react";
import classes from './CategoryChoose.module.css';

const CategoryChoose = ({ title, image }) => {
  const imageUrl = image && `http://127.0.0.1:3333${image.startsWith('/') ? '' : '/'}${image}`;
  return (
    <div className={classes.choose}>
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