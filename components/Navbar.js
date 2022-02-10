import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className='container'>
      <div className={styles.logo}>Euger Bonete</div>
      <div className={styles.nav_links}>
        <Link href={""}>
          <a className={styles.nav_link}>About </a>
        </Link>
        <Link href={""}>
          <a className={styles.nav_link}>Projects</a>
        </Link>
      </div>
      <div className='social'>
        <div className={styles.social_icon}>
          <AiFillGithub />
          Github
        </div>
      </div>
      <div className={styles.light_mode}>
        <BsSun />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50vw;
          margin: 0 auto;
          margin-top: 1rem;
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
