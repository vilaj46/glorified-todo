import React from "react";

import styles from "./FourOhPage.module.css";

export default () => {
  return (
    <div>
      <h1 className={styles.h1}>Ooops!</h1>
      <h2 className={styles.h2}>
        We can't seem to find the page <br />
        you're looking for.
      </h2>
      <h3 styles={styles.h3}>Error code: 404</h3>
    </div>
  );
};
