import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from 'react-router-dom'; 
import classes from './productList.module.css' 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3333/products/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return null;  
  }

  return (
    <div className={classes.productChoose}>
      {products.map((productItem) => (
        <Link to={`/products/${productItem.id}`} key={productItem.id}>
        <ProductCard
          key={productItem.id}
          title={productItem.title}
          image={productItem.image}
          price={productItem.price}
          discont_price={productItem.discont_price}
          productId={productItem.id}
        />
        </Link>
      ))
      .slice(0, 8)}
    </div>
  );
};

export default ProductList;