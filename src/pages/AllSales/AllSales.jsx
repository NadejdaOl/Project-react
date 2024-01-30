import React, { useEffect, useState } from "react";
import commonClasses from "../../styles/Common.module.css";
import classes from "./allSales.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import ProductCard from "../../components/ProductCard/ProductCard";


const AllSales = () => {
 
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
 
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

  return (
    <div
      className={`${classes.AllSales} ${
        theme === "dark" ? classes.darkTheme : ""
      }`}
    >
      <div className={commonClasses.container}>
        <div className={classes.click_btn}>
          <div className={classes.btn_main}>
            <Link to="/">Main Page</Link>
          </div>

          <div className={classes.connect}></div>

          <div className={classes.btn_sales}>
            <Link to="/sales">AllSales</Link>
          </div>
        </div>

        <div className={classes.sales_list}>
          <h2>All sales</h2>

         <div className={classes.product_sales}>
         {products.map((productItem) => (
          <Link to={`/products/${productItem.id}`} key={productItem.id}> 
            <ProductCard
              key={productItem.id}
              title={productItem.title}
              image={productItem.image}
              price={productItem.price}
              discont_price={productItem.discont_price}
            />
            </Link>
          ))
          .slice(0, 8)
          }

         </div>
          
        </div>
      </div>
    </div>
  );
};

export default AllSales;
