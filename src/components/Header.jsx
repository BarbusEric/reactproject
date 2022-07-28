import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";

function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = styles.dropdownMenu;
  if (isDisplayed) {
    dropdownMenuClasses += ` ${styles.displayMobileMenu}`;
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} bg-primary w-100`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img
              src="https://itschool.ro/images/logo-itschool-dark.svg"
              alt="itschool logo"
            />
          </Link>
          <div className={styles.menuIconContainer}>
            <span
              onClick={handleMenuClick}
              className={`material-icons ${styles.menuIcon} text-light`}
            >
              {" "}
              menu{" "}
            </span>
            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/sport"
                  className="p-3 text-uppercase text-light"
                >
                  Sport
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/world"
                  className="p-3 text-uppercase text-light"
                >
                  World
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/books"
                  className="p-3 text-uppercase text-light"
                >
                  Books
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link
                  to="/category/business"
                  className="p-3 text-uppercase text-light"
                >
                  Business
                </Link>
              </li>
              <li className={isDisplayed ? "container" : null}>
                <Link to="/favorites" className="p-3 text-uppercase text-light">
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
