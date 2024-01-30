import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import commonClasses from "../../styles/Common.module.css";
import classes from "./orderProduct.module.css";
import { useTheme } from "../../context";
import Counter from "../../components/Counter/Counter";
import { Link } from "react-router-dom";

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
};

const calculateDiscontPercentage = (price, discont_price) => {
  if (discont_price === null || discont_price === "null") {
    return null;
  }
  const percentage = ((price - discont_price) / price) * 100;
  return parseFloat(percentage.toFixed(1));
};

const OrderProduct = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3333/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Product Details:", data);
        setProduct(data[0]);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  console.log(product);

  const truncatedProductName = truncateTitle(product.title, 10);
  const discontPercentage = calculateDiscontPercentage(
    product.price,
    product.discont_price
  );

  return (
    <div
      className={`${classes.orderProduct} ${
        theme === "dark" ? classes.darkTheme : ""
      }`}
    >
      <div className={commonClasses.container}>
        <div className={classes.click_btn}>
          <div className={classes.btn_main}>
            <Link to="/">Main Page</Link>
          </div>
          <div className={classes.connect}></div>

          <div className={classes.btn_products}>
            <Link to="/products">All products</Link>
          </div>

          <div className={classes.connect}></div>

          <div className={classes.btn_productsId}>
            <Link to="/products/:id">{truncatedProductName}</Link>
          </div>
        </div>

        <div className={classes.orderCart}>
          <div className={classes.orderBoxLeft}>
            <div className={classes.orderPicture}>
              <img
                src={`http://127.0.0.1:3333${product.image}`}
                alt={product.title}
              />
            </div>
          </div>

          <div className={classes.orderBoxRight}>
            <div className={classes.orderPricesCount}>
              <div className={classes.orderTitle}>
                <h3>{truncatedProductName}</h3>
              </div>

              <div className={classes.orderPrice}>
                <div className={classes.orderNewPrice}>
                  <p>
                    $
                    {product.discont_price !== null &&
                    product.discont_price !== "null"
                      ? product.discont_price
                      : product.price}
                  </p>
                </div>

                {product.discont_price !== null &&
                  product.discont_price !== "null" && (
                    <div className={classes.orderDiscont}>
                      <p>${product.price.toFixed(1)}</p>
                    </div>
                  )}

                {product.discont_price !== null &&
                  product.discont_price !== "null" && (
                    <div className={classes.orderPercentage}>
                      <p>{discontPercentage}%</p>
                    </div>
                  )}
              </div>

              <div className={classes.orderCounter}>
                <div className={classes.counterPrice}>
                   <Counter />
                </div>
                

                <div className={classes.new_btn}>
                  <div className={classes.right_btn}>
                    <Link to="/basket" className={classes.product_btn}>
                      Add to cart
                    </Link>
                  </div>
                </div>
              </div>

              <div className={classes.orderDescription}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

            </div>
          </div>
        </div>
        <div className={classes.orderDescriptionNew}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
      </div>
    </div>
  );
};

export default OrderProduct;
