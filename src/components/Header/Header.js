import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../App/App.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.linksContainer}>
      <ButtonGroup>
        <Link className={styles.link} to="/">
          <Button className={styles.button}>Items</Button>
        </Link>
        <Link className={styles.link} to="/login">
          <Button className={styles.button}>Login</Button>
        </Link>
        <Link className={styles.link} to="/signup">
          <Button className={styles.button}>Signup</Button>
        </Link>
      </ButtonGroup>
    </div>
    <h1>My Glorified To Do List</h1>
  </header>
);

export default Header;
