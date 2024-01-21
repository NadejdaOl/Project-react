import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import nav from "../../media/basket1.png";
import newBasketImage from "../../media/basket2.png";
import logo from "../../media/logo-garten.svg";
import menuLight from "../../media/menu2.png";
import moon from "../../media/moon-moon-svgrepo-com.svg";
import menuDark from "../../media/munu1.png";
import sun from "../../media/sun-svgrepo-com.svg";
import commonClasses from "../../styles/Common.module.css";
import classes from "./Header.module.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 798);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const menuClass = `${classes.header_nav} ${isOpen ? "active" : ""}`;

  return (
    <header className={`${classes.header} ${classes[theme]}`}>
      <div className={commonClasses.container}>
        <div className={classes.header_row}>
          <div className={classes.header_logo}>
            <img src={logo} alt="logo" />
          </div>

          {isMobile && (
            <div className={classes.mobile_menu}>
              <button
                className={classes.header_menu_button}
                onClick={toggleMenu}
              >
                <img
                  src={theme === "light" ? menuLight : menuDark}
                  alt="menuIcon"
                />
              </button>

              {isOpen && (
                <div className={classes.mobile_menu_content}>
                  <button className={classes.close_button} onClick={toggleMenu}>
                    &times;
                  </button>

                  <ul
                    className={`${classes.mobile_nav_list} ${
                      theme === "dark" ? classes.darkFontColor : ""
                    }`}
                  >
                    <li>
                      <Link to="/" onClick={toggleMenu}>
                        Main Page
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories" onClick={toggleMenu}>
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" onClick={toggleMenu}>
                        All products
                      </Link>
                    </li>
                    <li>
                      <Link to="/sales" onClick={toggleMenu}>
                        All sales
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {!isMobile && (
            <div
              className={`${menuClass} ${
                theme === "dark" ? classes.darkFontColor : ""
              }`}
            >
              <ul className={classes.nav_list}>
                <li className={classes.nav_list_item}>
                  <Link to="/">Main Page</Link>
                </li>
                <li className={classes.nav_list_item}>
                  <Link to="/categories">Categories</Link>
                </li>
                <li className={classes.nav_list_item}>
                  <Link to="/products">All products</Link>
                </li>
                <li className={classes.nav_list_item}>
                  <Link to="/sales">All sales</Link>
                </li>
              </ul>
            </div>
          )}
          <div className={classes.toogleAll}>
            <button
              className={classes.theme_toggle_button}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <img className={classes.sunIcon} src={sun} alt="sun" />
              ) : (
                <img className={classes.moonIcon} src={moon} alt="moon" />
              )}
            </button>

            <div
              className={`${classes.nav_basket} ${
                theme === "dark" ? classes.darkFontColor : ""
              }`}
            >
              <img src={theme === "dark" ? newBasketImage : nav} alt="nav" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
