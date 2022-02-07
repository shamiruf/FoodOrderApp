import React from "react";

import mealsImage from "../../assets/meals.jpg";

import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>GoodMeals</header>
      <button>Cart</button>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt={"Table with food"} />
      </div>
    </>
  );
};

export default Header;
