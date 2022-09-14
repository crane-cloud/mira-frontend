import React from "react";
import styles from "./NavBar.module.css";
import { ReactComponent as NewLogo } from "../../assets/img/NewLogo.svg";

const index = () => {
  return (
    <div className={styles.NavArea}>
      <div className={styles.PageLogo}>
        <div>
          <NewLogo className={styles.CraneCloudLogo} />
        </div>
        <div className={styles.LogoText}>mira</div>
      </div>
      <button className={styles.DocsButton}>
        <div>Documentation</div>
      </button>
    </div>
  );
};

export default index;
