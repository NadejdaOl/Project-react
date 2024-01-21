import React from "react";
import { Link } from 'react-router-dom';

import classes from "./categoryPage.module.css";
import commonClasses from '../../styles/Common.module.css';

import CategoryAllChoose from '../../components/CategoryAllChoose/CategoryAllChoose';

function CategoryPage () {
    
    return (
        <div className={classes.ChoosesCategory}>
            <div className={commonClasses.container}>
                <div className={classes.click_btn}>
                    <div className={classes.btn_main}>
                        <Link to="/">Main Page</Link>
                    </div>
                    <div className={classes.connect}></div>
                    <div className={classes.btn_categories}>
                        <Link to="/categories">Categories</Link>
                    </div>
                </div>

                <div className={classes.categoryPage}>
                    <h2>Categories</h2>
                </div>
            </div> 

                <CategoryAllChoose />

            </div> 
                
    )
}
export default CategoryPage;
