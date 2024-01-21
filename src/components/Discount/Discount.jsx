import React from "react";

import classes from './Discount.module.css';
import commonClasses from '../../styles/Common.module.css';
import discount from '../../media/discount.svg';
import FormReg from './../Form/FormReg';

function Discount () {
    return (
        <div className={classes.formDiscount}>
            <div className={commonClasses.container}>
                <div className={classes.rabbat}>
                    <h2>5% off on the first order</h2>
                 

                <div className={classes.order}>
                    <div className={classes.fotoOrder}>
                        <img src={discount} alt="foto" />
                    </div>
                    <div className={classes.form}> <FormReg /> </div> 
                    
                </div>
            </div>
        </div>     
        </div>
                       
    )
}
export default Discount;