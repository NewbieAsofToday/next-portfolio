import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ white, setWhite, themeToggler }) => {
  const [moon, setMoon] = useState(false);
  const themeHandler = () => {
    themeToggler();
    setWhite(!white);
    setMoon(!moon);
  };
  const [menu, setMenu] = useState(false);
  return (
    <nav className={styles.container}>
      <motion.div className={styles.logo}>
        <Link href='/'>
          <p>EugerBonete</p>
        </Link>
        <motion.span animate={{ fontSize: "1.5rem" }}>
          <Link href='/'>👋</Link>
        </motion.span>
      </motion.div>

      <div className={styles.links}>
        <Link href={""}>
          <p>Works</p>
        </Link>
        <Link href={""}>
          <p>About</p>
        </Link>
      </div>

      <div className={styles.socials}>
        <div className={styles.social}>
          <BsDownload className={styles.socialLogo} /> <p>Resume</p>
        </div>
      </div>

      <motion.div
        className={styles.btns}
        initial={{ x: "100vw" }}
        transition={{ delay: 0.3 }}
        animate={{ x: 0 }}
      >
        <motion.div
          animate={{ fontSize: "1.5rem" }}
          onClick={() => themeHandler()}
          className={styles.mode}
        >
          {moon ? (
            <div className={styles.moon}>
              <BsMoon />
            </div>
          ) : (
            <div className={styles.sun}>
              <BsSun />
            </div>
          )}
        </motion.div>
        <div className={styles.menuBtn} onClick={() => setMenu(!menu)}>
          <BiMenu />
        </div>
        {menu ? (
          <div className={styles.menu}>
            <Link href={""}>
              <span>Works</span>
            </Link>
            <Link href={""}>
              <span>About</span>
            </Link>
            <Link href={""}>
              <span>Source</span>
            </Link>
          </div>
        ) : null}
      </motion.div>
    </nav>
  );
};

export default Navbar;
