import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import TaranbergLogo from "../images/TaranbergLogo.png";
import styles from "../styles/Nav.module.css";

import { useMediaQuery } from "@mui/material";
import { useState } from "react";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

//props
type Props = {};

function Nav({}: Props) {
  const isMobile = useMediaQuery("(max-width:700px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {menuOpen ? (
        <div className={styles.menu__background}>
          <div className={styles.close__menu}>
            <CloseIcon
              className={styles.menu__icon}
              htmlColor="#ffffff"
              fontSize="large"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <div className={styles.menu__content}>
            <Link href="/">
              <a
                className={
                  path === "/"
                    ? styles.menu__link__bold
                    : styles.menu__link__bold
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  path === "/about"
                    ? styles.menu__link__bold
                    : styles.menu__link__bold
                }
              >
                About
              </a>
            </Link>
            <Link href="/projects">
              <a
                className={
                  path === "/projects"
                    ? styles.menu__link__bold
                    : styles.menu__link__bold
                }
              >
                Projects
              </a>
            </Link>
            <Link href="/contact">
              <a className={styles.menu__contact__us}>Contact Us</a>
            </Link>
          </div>
        </div>
      ) : (
        <nav className={styles.nav}>
          <div>
            <Link href="/">
              <Image src={TaranbergLogo} alt="Taranberg Logo" />
            </Link>
          </div>
          {!isMobile ? (
            <div>
              <Link href="/">
                <a className={path === "/" ? styles.link__bold : styles.link}>
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={
                    path === "/about" ? styles.link__bold : styles.link
                  }
                >
                  About
                </a>
              </Link>
              <Link href="/projects">
                <a
                  className={
                    path === "/projects" ? styles.link__bold : styles.link
                  }
                >
                  Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className={styles.contact__us}>Contact Us</a>
              </Link>
            </div>
          ) : (
            <div>
              <MenuIcon
                className={styles.menu__icon}
                fontSize="large"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
          )}
        </nav>
      )}
    </>
  );
}

export default Nav;
