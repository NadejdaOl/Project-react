import React from 'react';
import { Link, useRouteError} from 'react-router-dom';
import { useTheme } from "../../context";
import classes from './errorPage.module.css';
import commonClasses from '../../styles/Common.module.css';
import oops from '../../media/oops.svg';


const ErrorPage = () => {
  const { theme } = useTheme();
  const error = useRouteError();

  return (
    <div className={`${classes.error_page}  ${theme === "dark" ? classes.darkTheme : ""}`}>
      <div className={commonClasses.container}>

          <div className={classes.error_box} >
              <div className={classes.error_picture}>
                <img src={oops} alt="error" />
              </div>

              <div className={classes.error_title}>
                <h2>Page Not Found</h2>
                <p>
                We’re sorry, the page you requested could not be found. Please go
                back to the homepage.
                </p>
              </div>
          
              <div className={classes.btn_home}>
                  <Link to="/">Go home</Link>
              </div>  
          </div>  
      </div>
    </div>
  );
};

export default ErrorPage;