import Image from "next/image";

//logo
import Logo from "../images/TaranbergLogoGreen.png";

//icons
import LinkedIn from "../images/LinkedIn.png";
import Twitter from "../images/Twitter.png";
import YouTube from "../images/Youtube.png";

import styles from "../styles/Footer.module.css";
import { Email, LocationOn } from "@mui/icons-material";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__sections}>
        <div className={styles.footer__section__1}>
          <div className={styles.footer__sub__section__1}>
            <Image
              src={Logo}
              alt="Taranberg Logo"
              className={styles.footer__logo}
            />
            <p className={styles.description__bold}>
              A small team with a big passion<br></br> for educational content.
            </p>
          </div>
          <div className={styles.footer__sub__section__1}>
            <p className={styles.description}>Home</p>
            <p className={styles.description}>About</p>
            <p className={styles.description}>Projects</p>
          </div>
          <div className={styles.footer__sub__section__1}>
            <div className={styles.icon__container}>
              <LocationOn htmlColor="#ffffff" style={{ marginRight: "10px" }} />
              <p className={styles.description}>
                Aluf Kalman Magen St 3, Tel Aviv-Yafo, 6107075, Israel
              </p>
            </div>
            <div className={styles.icon__container}>
              <Email htmlColor="#ffffff" style={{ marginRight: "10px" }} />
              <p className={styles.description}>hello@taranberg.com</p>
            </div>
          </div>
          <div className={styles.footer__sub__section__1}>
            <button className={styles.contact__us__button}>Contact Us</button>
          </div>
        </div>
        <div className={styles.footer__divider} />
        <div className={styles.footer__section__2}>
          <div className={styles.footer__section__2__wrapper}>
            <div className={styles.footer__sub__section__2}>
              <p className={styles.description}>
                © 2022 Taranberg, Inc. All rights reserved.
              </p>
            </div>
            <div className={styles.footer__sub__section__2__icons}>
              <div className={styles.media__icon}>
                <Image src={LinkedIn} alt="LinkedIn" />
              </div>
              <div className={styles.media__icon}>
                <Image src={Twitter} alt="Twitter" />
              </div>
              <div className={styles.media__icon}>
                <Image src={YouTube} alt="YouTube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
