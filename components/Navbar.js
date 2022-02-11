import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className='container'>
      <motion.div className={styles.logo}>
        <Link href={"/"}>Euger Bonete</Link>
        <motion.span animate={{ fontSize: "1.5rem" }}>
          <Link href={"/"}>👋</Link>
        </motion.span>
      </motion.div>
      <div className={styles.nav_links}>
        <Link href={"/project-page"}>
          <a className={styles.nav_link}>Projects</a>
        </Link>
        <Link href={"/about"}>
          <a className={styles.nav_link}>About </a>
        </Link>
      </div>
      <div className='social'>
        <motion.div
          animate={{ fontSize: "1rem" }}
          className={styles.social_icon}
        >
          <AiFillGithub
            style={{ fontSize: "1.9rem" }}
            className={styles.wave}
          />
          {/* Github */}
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 300 }}
        transition={{ duration: 0.1 }}
        animate={{ x: 0 }}
        className={styles.light_mode}
      >
        <BsSun />
      </motion.div>
      <div className={styles.mobile_mode}>
        <BiMenu />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 60vw;
          margin: 0 auto;
          margin-top: 1rem;
          min-width: 500px;
        }
        .social {
          flex: 1;
          margin-left: 1rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
