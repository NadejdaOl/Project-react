import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTheme } from "../../context";

import commonClasses from "../../styles/Common.module.css";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Product.module.css";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const url_base = "http://127.0.0.1:3333/";
    const fetchProducts = async () => {
      try {
        const response = await fetch(url_base + "products/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const discountedProducts = data.filter(
          (product) => product.discont_price !== null
        );
        setProducts(discountedProducts);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchProducts();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.productsAll}>
      <div className={commonClasses.container}>
        <div className={classes.nextProducts}>
          <div
            className={`${classes.sale} 
                      ${theme === "dark" ? classes.darkTheme : ""}`}
          >
            <h2>Sale</h2>
          </div>

          <div className={classes.changeProduct}>
            <div className={classes.title}>
              <div className={classes.linie}></div>
              <button className={classes.allSalesBtn}>All sales</button>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          {products.map((productItem) => (
            <ProductCard
              key={productItem.id}
              title={productItem.title}
              image={productItem.image}
              price={productItem.price}
              discont_price={productItem.discont_price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Product; 
