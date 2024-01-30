import React from "react";

import Map from "../../components/Map/Map";
import { useTheme } from "../../context";
import instagram from "../../media/ic-instagram.svg";
import whatsapp from "../../media/ic-whatsapp.svg";
import commonClasses from "../../styles/Common.module.css";
import classes from "./Footer.module.css";

function Footer() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? classes.darkTheme : ""}`}>
      <footer
        className={`${classes.footer}
              ${theme === "dark" ? classes.darkTheme : ""}`}
      >
        <div className={commonClasses.container}>
          <div className={classes.daten}>
            <div
              className={`${classes.contact} 
            ${theme === "dark" ? classes.darkTheme : ""}`}
            >
              Contact
            </div>

            <div className={classes.connect}>
              <div className={classes.phone}>
                <p className={classes.descreibe}>Phone</p>
                <p className={classes.number}>+49 999 999 99 99</p>
              </div>

              <div className={classes.socials}>
                <p className={classes.descreibe}>Socials</p>

                <div className={classes.media}>
                  <div className={classes.instagram}>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <img src={instagram} alt="instagram" />
                    </a>
                  </div>

                  <div className={classes.whatsapp}>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <img src={whatsapp} alt="whatsapp" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={classes.adress}>
                <p className={classes.descreibe}>Adress</p>
                <p className={classes.number}>
                  Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
                </p>
              </div>

              <div className={classes.work}>
                <p className={classes.descreibe}>Working Hours</p>
                <p className={classes.number}>24 hours a day</p>
              </div>

              <Map />
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default Footer;
