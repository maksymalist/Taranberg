import React from "react";

import styles from "../styles/Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </footer>
  );
};

export default Footer;
