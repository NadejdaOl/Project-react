import React from "react";

import classes from './FormReg.module.css';

function FormReg () {
    return (
        <div className={classes.formReg}>
                    <div className={classes.registration}>
                        <div className={classes.area}>
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className={classes.area}>
                            <input type="text" placeholder="Phone number" />
                        </div>

                        <div className={classes.area}>
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className={classes.area_actions}>
                            <button type="submit">Get a discount</button>
                        </div>
                        
                    </div>
                </div>           
    )
}
export default FormReg;

