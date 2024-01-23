import React from "react";
import { Link } from 'react-router-dom';
import { useTheme } from "../../context";

import classes from "./categoryPage.module.css";
import commonClasses from '../../styles/Common.module.css';

import CategoryAllChoose from '../../components/CategoryAllChoose/CategoryAllChoose';

function CategoryPage () {
    const { theme } = useTheme();
    
    return (
        <div className={`${classes.ChoosesCategory} ${theme === "dark" ? classes.darkTheme : ""}`}>
            <div className={commonClasses.container}>
                <div className={classes.click_btn}>
                    <div className={classes.btn_main}>
                        <Link to="/">Main Page</Link>
                    </div>
                    <div className={classes.connect}></div>
                    <div className={`${classes.btn_categories} ${theme === "dark" ? classes.darkTheme : ""}`}>
                        <Link to="/categories">Categories</Link>
                    </div>
                </div>

                <div className={`${classes.categoryPage} ${theme === "dark" ? classes.darkTheme : ""}`}>
                    <h2>Categories</h2>
                </div>
            </div> 

                <CategoryAllChoose />

            </div> 
                
    )
}
export default CategoryPage;
