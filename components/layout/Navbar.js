import React, { useState } from "react";
import { BsGithub, BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
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
    <nav className='container'>
      <motion.div className={styles.logo}>
        <Link href='/'>
          <p>EugerBonete</p>
        </Link>
        <motion.span animate={{ fontSize: "1.5rem" }}>
          <Link href='/'>
            <span className={styles.wave}>👋</span>
          </Link>
        </motion.span>
      </motion.div>

      <div className={styles.links}>
        <Link href={"#works"}>
          <p>Works</p>
        </Link>
        <Link href={"#skills"}>
          <p>Skills</p>
        </Link>
      </div>

      <div className={styles.socials}>
        <div className={styles.social}>
          <a href=''>
            <BsGithub className={styles.socialLogo} />
          </a>
        </div>
        <div className={styles.social}>
          <a href=''>
            <BsLinkedin className={styles.socialLogo} />
          </a>
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
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50%;
          margin: 0 auto;
          position: sticky;
          top: 0;
          z-index: 1;
          /* border-bottom: 2px solid; */
          background-color: ${moon
            ? "rgba(32, 32, 35, 0.95)"
            : "rgba(240, 231, 219, 0.95)"};
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
