import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import styles from "../Header.module.css";

const ItemsLink = () => {
  return (
    <Link to="/" className={styles.items}>
      <Button className={styles.button}>Items</Button>
    </Link>
  );
};

export default ItemsLink;
