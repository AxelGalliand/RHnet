import React from "react";
import styles from '../styles/Header.module.css';
import { Link } from "react-router-dom";

const Header =()=> {
return(
  <Link to="/">
    <h1 className={styles["HeaderTitle"]}>RHnet</h1>
  </Link>
)
}

export default Header;
