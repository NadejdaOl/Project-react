import React from 'react';
import commonClasses from '../../styles/Common.module.css';
import classes from './allProducts.module.css'
import { Link } from "react-router-dom";
import { useTheme } from "../../context";


const AllProducts = () => {
  return (
    <div className={classes.AllProducts}>
      <div className={commonClasses.container}>
          <div className={classes.click_btn}>
              <div className={classes.btn_main}>
                <Link to="/">Main Page</Link>
              </div>

              <div className={classes.connect}></div>

              <div className={classes.btn_categories}>
                 <Link to="/categories">Categories</Link>
              </div>

              <div className={classes.connect}></div>

              <div className={classes.btn_products}>
                 <Link to="/products">AllProducts</Link>
              </div>
              </div>


              <div className={classes.product_list}>
                    <h2>All products</h2>
              </div>
      </div>
    </div>
   
  );
};

export default AllProducts;